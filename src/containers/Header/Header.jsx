import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <header
      className={`${classes.gpt3__header} section__padding hero`}
      id="home"
      ref={props.headerRef}
    >
      <div className={classes["gpt3__header-content"]}>
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={classes["gpt3__header-content__input"]}>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className={classes["gpt3__header-content__people"]}>
          <img src={people} alt="Some users images" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={classes["gpt3__header-image"]}>
        <img src={ai} alt="AI" />
      </div>
    </header>
  );
};

export default Header;
