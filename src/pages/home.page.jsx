// Home.js

import React from "react";
import { Card } from "react-bootstrap";
import styles from "../assets/css/home.module.css";
import logo from "../assets/images/logo.png";
import NavigationButton from "../components/NavigationButton";
import { PLAYER_REGISTRATION } from "../routes/appRoutes";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.background_gradient}></div>
      <div className={styles.center_card}>
        <Card className={styles.card}>
          <Card.Body>
            <div className={styles.logo_container}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <Card.Text className={styles.welcome_message}>
              Welcome to Chess Master!
            </Card.Text>
            <Card.Text className={styles.warning_message}>
              <strong>Warning: Protect Your Health </strong>
              <br />
              While chess can be an incredibly rewarding and stimulating game,
              it's important to remember to take breaks and care for your
              physical and mental well-being. Prolonged periods of intense focus
              can lead to eye strain, fatigue, and decreased cognitive
              performance. To ensure a healthy and enjoyable gaming experience,
              we recommend taking regular breaks, staying hydrated, and
              practicing good posture. Listen to your body and don't hesitate to
              step away from the board if you start to feel tired or
              uncomfortable. Remember, your health is your most valuable asset.
              Take care of yourself, and may your moves be swift and your
              victories plentiful!
            </Card.Text>
            <NavigationButton
              text="I Agree"
              variant="primary"
              NavigateTo={PLAYER_REGISTRATION}
            />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
