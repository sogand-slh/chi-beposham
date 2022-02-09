import React from "react";
import { Redirect, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constant";

export const RouterSwitch = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(
        ({ component, path: componentPath }, index) => (
          <Route exact path={componentPath} element={component} key={index} />
        )
      )}
      <Redirect to={ROUTES.root.path} />
    </Routes>
  );
};
