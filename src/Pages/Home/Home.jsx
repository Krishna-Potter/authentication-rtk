import { useSelector } from "react-redux";

function HomePage() {
  const { username } = useSelector((state) => state.authentication);

  return (
    <>
      <h2>Welcome {username}</h2>
    </>
  );
}

export default HomePage;
