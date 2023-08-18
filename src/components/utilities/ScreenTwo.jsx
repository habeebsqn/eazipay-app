import React from "react";
import classes from "./ScreenTwo.module.css";
import Eclipse from "./Eclipse";

const ScreenTwo = () => {
  return (
    <div>
      <div className={classes.frame1}>
        <div className={classes["text-wrapper-1"]}>How Eazipay Works</div>
        <div className={classes["text-wrapper-2"]}>
          <h2> Get started in 3 simple steps. </h2>
        </div>
      </div>
      <Eclipse />
    </div>
  );
};

export default ScreenTwo;
