import React from "react";
import logo from "../assets/images/logo_withoutbackground.png";

const Header = (props) => {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "brown",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      <div style={{ textAlign: "center", color: "white" }}>
        <strong>{props.playerDetails.player_one_name}</strong> Vs{" "}
        <strong>{props.playerDetails.player_two_name}</strong>
      </div>
      <div>
        {props.isRunning ? (
          <>
            <span style={{ marginLeft: "10px" }}>
              {props.formatTime(props.timer)}
            </span>
            <button onClick={props.handleResetButtonClick}>Reset</button>
          </>
        ) : (
          <button onClick={props.handleStartButtonClick}>Start</button>
        )}
      </div>
    </div>
  );
};

export default Header;
