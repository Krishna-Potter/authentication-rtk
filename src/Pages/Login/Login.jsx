import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  storePassword,
  storeUsername,
  validateAuthData,
} from "../../Redux/Features/Authentication/auth";
import { PATH } from "../../Constants/routePath";

function LoginPage() {
  const { loggedStatus } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitUserData = () => {
    dispatch(validateAuthData());
    if (loggedStatus) {
      navigate(PATH.HOME);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={(e) => dispatch(storeUsername(e.target.value))}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => dispatch(storePassword(e.target.value))}
      />
      <button onClick={submitUserData}>submit</button>
    </>
  );
}

export default LoginPage;
