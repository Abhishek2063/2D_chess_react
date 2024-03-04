import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.page";
import { HOME, PLAYER_REGISTRATION } from "./appRoutes";
import PlayerRegistration from "../pages/playerRegistration.page";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route key={HOME} path={HOME} element={<Home />} />
        <Route
          key={PLAYER_REGISTRATION}
          path={PLAYER_REGISTRATION}
          element={<PlayerRegistration />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
