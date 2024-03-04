// NavigationButton.js
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const NavigationButton = ({ text, variant, NavigateTo, className }) => {
  return (
    <Link to={NavigateTo}>
      <Button variant={variant} className={className}>
        {text}
      </Button>
    </Link>
  );
};

export default NavigationButton;
