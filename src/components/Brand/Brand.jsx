import classes from "./brand.module.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
const Brand = () => {
  return (
    <div className={`${classes["gpt3__brand"]} section__padding`}>
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
};

export default Brand;
