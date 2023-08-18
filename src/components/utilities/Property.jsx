import React from "react";
import classes from "./Property.module.css";

const Property = () => {
  return (
    <div>
      <div className={classes.prop}>
        <div className={classes.rectangle} />
        <img
          alt="Onboarding"
          src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/onbrdng-2-1.gif"
        />
        <div className={classes.div}></div>
      </div>
    </div>
  );
};

export default Property;
