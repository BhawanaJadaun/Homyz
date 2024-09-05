import React, { useState } from "react";
import logo from "../../../public/assests/logo (1).png"; // Ensure the correct path
import { CgMenuRightAlt } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened ? "-100%" : "0",
      };
    }
    return {}; // Default empty styles for larger screens
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerwidth h-container">
        <img src={logo} alt="Logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button className="button">
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <CgMenuRightAlt size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
