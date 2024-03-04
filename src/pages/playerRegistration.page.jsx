// PlayerRegistration.js
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { Alert, Button, Card } from "react-bootstrap";
import "../assets/css/playerRegistration.css";
import { setUserDetails } from "../storage/user";
import { useNavigate } from "react-router-dom";
import { CHESS_BOARD } from "../routes/appRoutes";
const PlayerRegistration = () => {
  const [playerData, setPlayerData] = useState({
    player_one_name: "Player 1",
    player_two_name: "Player 2",
  });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setShowError(false);
    setPlayerData({
      ...playerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if both player names have values
    if (!playerData.player_one_name || !playerData.player_two_name) {
      setShowError(true); // Show error message
      return;
    }

    // Save player details in localStorage
    setUserDetails("player_data", playerData);
    setShowError(false);
    navigate(CHESS_BOARD)
  };

  return (
    <div className="background-gradient">
      <div className="center">
        <Card className="registration-card  card">
          <Card.Body>
            <h2 className="card-heading">Player Registration</h2>
            {showError && (
              <Alert
                variant="danger"
                onClose={() => setShowError(false)}
                dismissible
              >
                Please enter both player names.
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <TextInput
                name="player_one_name"
                label="Player 1"
                value={playerData.player_one_name}
                onChange={handleChange}
                onBlur={handleChange}
                isRequired={true}
              />

              <TextInput
                name="player_two_name"
                label="Player 2"
                value={playerData.player_two_name}
                onChange={handleChange}
                onBlur={handleChange}
                isRequired={true}
              />

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PlayerRegistration;
