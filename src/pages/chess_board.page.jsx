import React, { useEffect, useState } from "react";
import Header from "../view/Header";
import Footer from "../view/Footer";
import { getUserDetails } from "../storage/user";

const ChessBoard = () => {
  const [alertMessage, setAlertMessage] = useState(
    "Press the start button to start the game."
  );
  const playerDetails = getUserDetails("player_data");

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartButtonClick = () => {
    setIsRunning(true);
  };

  const handleResetButtonClick = () => {
    setIsRunning(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  
  return (
    <div className="app">
      <Header
      playerDetails = {playerDetails}
      isRunning = {isRunning}
      handleResetButtonClick={handleResetButtonClick}
      handleStartButtonClick={handleStartButtonClick}
      formatTime={formatTime}
      timer={timer}
      />
      <Footer alertMessage={alertMessage} />
    </div>
  );
};

export default ChessBoard;
