import { Route, Routes } from "react-router-dom";
import { routerConfigData } from "./Routes";

function RouterConfig() {
  return (
    <>
      <Routes>
        {routerConfigData.map((item, index) => {
          const { Comp, path: pathName, key } = item;
          return <Route path={pathName} element={<Comp />} key={index + key} />;
        })}
      </Routes>
    </>
  );
}

export default RouterConfig;
