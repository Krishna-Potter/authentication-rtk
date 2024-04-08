import { Route, Routes } from "react-router-dom";
import { routerConfigData } from "./Routes";
import PrivateRouter from "./PrivateRouter";
import React from "react";

function RouterConfig() {
  return (
    <>
      <Routes>
        {routerConfigData.map((item, index) => {
          const { Comp, path: pathName, key, type } = item;
          return (
            <React.Fragment key={index + key}>
              {type === "public" ? (
                <Route path={pathName} element={<Comp />} />
              ) : (
                <Route element={<PrivateRouter />}>
                  <Route path={pathName} element={<Comp />} />;
                </Route>
              )}
            </React.Fragment>
          );
        })}
      </Routes>
    </>
  );
}

export default RouterConfig;
