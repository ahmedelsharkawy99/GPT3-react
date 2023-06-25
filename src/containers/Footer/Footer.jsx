import classes from "./footer.module.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className={`${classes["gpt3__footer"]} section__padding`}>
      <div className={classes["gpt3__footer-heading"]}>
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>

      <button type="button">Request Early Access</button>

      <div className={classes["gpt3__footer-links"]}>
        <div className={classes["gpt3__footer-links_logo"]}>
          <img src={logo} alt="logo" />
          <address>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </address>
        </div>

        <div className={classes["gpt3__footer-links_col"]}>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#Overons">Overons</a>
            </li>
            <li>
              <a href="#Social">Social Media</a>
            </li>
            <li>
              <a href="#Counters">Counters</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes["gpt3__footer-links_col"]}>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#Overons">Terms & Conditions</a>
            </li>
            <li>
              <a href="#Social">Privacy Policy</a>
            </li>
            <li>
              <a href="#Counters">Contact</a>
            </li>
          </ul>
        </div>

        <div className={classes["gpt3__footer-links_col"]}>
          <h4>Get in touch</h4>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>
              <a href="tel:085-132567">085-132567</a>
            </li>
            <li>
              <a href="mail:info@payme.net">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes["gpt3__footer-copyright"]}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
