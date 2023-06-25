import React from "react";
import classes from "./feature.module.css";

const Feature = ({ title, text }) => {
  return (
    <div className={classes["gpt3__features-container__feature"]}>
      <div className={classes["gpt3__features-container__feature-title"]}>
        <div />
        <h3>{title}</h3>
      </div>
      <div className={classes["gpt3__features-container__feature-text"]}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
