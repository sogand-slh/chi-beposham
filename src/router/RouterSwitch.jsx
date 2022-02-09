import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constant";

export const RouterSwitch = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(({ Component, element }, index) => (
        <Route path={element} element={<Component />} key={index} />
      ))}
      <Route path="/*" element={<Navigate to={ROUTES.root.element} />}></Route>
    </Routes>
  );
};
