import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.page";
import { CHESS_BOARD, HOME, PLAYER_REGISTRATION } from "./appRoutes";
import PlayerRegistration from "../pages/playerRegistration.page";
import ChessBoard from "../pages/chess_board.page";
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
        <Route key={CHESS_BOARD} path={CHESS_BOARD} element={<ChessBoard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
