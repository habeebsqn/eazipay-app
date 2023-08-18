import React from "react";
import classes from "./LandingPageLogo.module.css";

const LandingPageLogo = () => {
  return (
    <div className={classes.logo}>
      <div>
        <img
          alt=""
          src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/eazipay-logo-new-1-1.svg"
        />
      </div>
    </div>
  );
};

export default LandingPageLogo;
