import React from "react";
import classes from "./Eclipse.module.css";
import Property from "./Property";

const Eclipse = () => {
  return (
    <div>
      <div className={classes.bgwrapper}>
        <div className={classes.bg}>
          <div className={classes.wrapper}>
            <div className={classes.ellipse} />
          </div>
        </div>
        <Property />
      </div>
    </div>
  );
};

export default Eclipse;
