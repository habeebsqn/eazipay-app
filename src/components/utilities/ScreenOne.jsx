import React from "react";
import classes from "./ScreenOne.module.css";
import { Button } from "react-bootstrap";

const ScreenOne = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.children}

      <div>
        <img
          alt="Frame"
          src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/frame-48096487.png"
        />
      </div>

      <div className={classes.frame7}>
        <div className={classes.frame8}>
          <div className={classes.frame9}>
            <p className={classes.rollpay}>
              <span>Run your</span>
              <span className={classes["text-wrapper-1"]}>&nbsp;</span>
              <span className={classes["text-wrapper-2"]}>payroll</span>
              <span className={classes["text-wrapper-1"]}>
                <br />
                easily
              </span>
              <span> in </span>
              <span className={classes["text-wrapper-3"]}>seconds</span>
            </p>
            <p className={classes.text}>
              We’ve built an all-inclusive simple solution for individual and
              businesses to manage staff, pay salaries, bills, and relevant
              taxes all at once.
            </p>
          </div>
          <Button
            variant="success"
            className={`rounded-pill ${classes.btn}`}
            style={{ backgroundColor: "#4d8177" }}
            size="lg"
          >
            Start using free, forever
          </Button>
        </div>

        <div className={classes.frame10}>
          <div className={classes["text-wrapper-4"]}>
            <h5>Download the Eazipay App</h5>
          </div>

          <div className={classes.download}>
            <div className={classes.frame11}>
              <div className={classes.group}>
                <img
                  alt="Ic baseline apple"
                  src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/ic-baseline-apple-1.svg"
                />
              </div>
              <div className={classes.frame12}>
                <div className={classes["text-wrapper-5"]}>Download on the</div>
                <div className={classes["text-wrapper-5"]}>
                  <h5> Appstore</h5>
                </div>
              </div>
            </div>
            <div className={classes.frame11}>
              <div className={classes.group}>
                <img
                  alt="Logos google play"
                  src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/logos-google-play-icon-1.svg"
                />
              </div>
              <div className={classes.frame12}>
                <div className={classes["text-wrapper-5"]}>Get on</div>
                <div className={classes["text-wrapper-5"]}>
                  <h5>Google play</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.frame13}>
        <img
          alt="Frame"
          src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/frame-48096509.png"
        />
      </div>
    </div>
  );
};

export default ScreenOne;
