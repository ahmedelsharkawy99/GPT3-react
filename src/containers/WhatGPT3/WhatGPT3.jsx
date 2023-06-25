import { Feature } from "../../components";
import classes from "./whatgbt3.module.css";

const WhatGPT3 = () => {
  return (
    <section
      className={`${classes["gpt3__whatgpt3"]} section__margin`}
      id="wgpt3"
    >
      <div className={classes["gpt3__whatgpt3-feature"]}>
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className={classes["gpt3__whatgpt3-heading"]}>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          <a href="#blog"> Explore The Library</a>
        </p>
      </div>
      <div className={classes["gpt3__whatgpt3-container"]}>
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </section>
  );
};

export default WhatGPT3;
