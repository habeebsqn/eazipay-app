import React from "react";
import classes from "./Footer.module.css";
import LandingPageLogo from "./LandingPageLogo";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.companyinfo}>
        <div className={classes.logowrapper}>
          <LandingPageLogo />
        </div>
        <div className={classes.copyright}>
          <div className={classes["text-wrapper-20"]}>
            Copyright © 2023 Eazipay.
          </div>
          <div className={classes["text-wrapper-21"]}>All rights reserved</div>
        </div>
        <div className={classes.div3}>
          <div className={classes.groupwrapper}>
            <div className={classes.vectorwrapper}>
              <img
                className={classes.vector}
                alt={classes.vector}
                src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/vector-1.svg"
              />
            </div>
          </div>
          <div className={classes.groupwrapper}>
            <div className={classes.imgwrapperr}>
              <img
                className={classes.vector}
                alt={classes.vector}
                src="https://generation-sessions.s3.amazonaws.com/7ba4fa1b3195d4090bbda1a4f0a4b156/img/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.links}>
        <div className={classes.col}>
          <div className={classes["text-wrapper-22"]}>Product</div>
          <div className={classes.listitems}>
            <div className={classes["text-wrapper-23"]}>Indidual</div>
            <div className={classes["text-wrapper-24"]}>Businesses</div>
            <div className={classes["text-wrapper-24"]}>Request Demo</div>
            <div className={classes["text-wrapper-24"]}>Pricing</div>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes["text-wrapper-22"]}>Legal</div>
          <div className={classes.listitems}>
            <div className={classes["text-wrapper-23"]}>Privacy Policy</div>
            <div className={classes["text-wrapper-24"]}>Terms of Service</div>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes["text-wrapper-22"]}>Resources</div>
          <div className={classes.listitems}>
            <div className={classes["text-wrapper-23"]}>FAQs</div>
            <div className={classes["text-wrapper-24"]}>Blog</div>
            <div className={classes["text-wrapper-24"]}>Career</div>
            <div className={classes["text-wrapper-24"]}>Customer Stories</div>
          </div>
        </div>
        <div className="col-2">
          <div className={classes["text-wrapper-22"]}>Contact us</div>
          <div className={classes.listitems}>
            <div className={classes["text-wrapper-23"]}>eazipay@gmail.com</div>
            <div className={classes["text-wrapper-24"]}>+234 816 878 9518</div>
          </div>
          <div className={classes.emailfield}>
            <div className={classes.overlap}>
              <div className={classes["text-wrapper-25"]}>
                Your email address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
