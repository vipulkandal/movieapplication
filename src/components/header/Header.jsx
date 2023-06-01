import React from "react";
import "./header.css";
import movieIcon from "../../assets/movieIcon.png";

const Header = () => {
  return (
    <div onClick={(e) => window.scroll(0, 0)} className="header__container">
      Popcorn Time
    </div>
  );
};

export default Header;
