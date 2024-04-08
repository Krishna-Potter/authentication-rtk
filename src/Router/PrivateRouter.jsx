import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const { loggedStatus } = useSelector((state) => state.authentication);

  return loggedStatus ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouter;
