import React from "react";
import classes from "./cta.module.css";

const CTA = () => {
  return (
    <section className={classes["gpt3__cta"]}>
      <div className={classes["gpt3__cta-content"]}>
        <small>Request Early Access to Get Started</small>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={classes["gpt3__cta-btn"]}>
        <button type="button">Get Started</button>
      </div>
    </section>
  );
};

export default CTA;
