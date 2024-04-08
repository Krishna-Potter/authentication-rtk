import { PATH } from "../Constants/routePath";
import HomePage from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/Login";

export const routerConfigData = [
  { Comp: LoginPage, path: PATH.LOGIN, key: "login", type: "public" },
  { Comp: HomePage, path: PATH.HOME, key: "home" },
];
