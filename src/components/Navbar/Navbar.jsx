import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import classes from "./navbar.module.css";
import NavLinks from "./NavLinks/NavItems";
import NavSign from "./NavSign/NavSign";

const Navber = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${classes["gpt3__navbar"]} ${
        props.isIntersecting ? "sticky gradient__bg" : ""
      }`}
      ref={props.navRef}
    >
      <div className={classes["gpt3__navbar-links"]}>
        <div className={classes["gpt3__navbar-links-logo"]}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={classes["gpt3__navbar-links-container"]}>
          <NavLinks />
        </ul>
      </div>
      <NavSign className={classes["gpt3__navbar-sign"]} />

      <div className={classes["gpt3__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div
            className={`${classes["gpt3__navbar-menu_container"]} scale-up-ver-center`}
          >
            <ul className={classes["gpt3__navbar-menu_container-links"]}>
              <NavLinks />
            </ul>
            <NavSign className={classes["gpt3__navbar-menu_container-sign"]} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
