import React from "react";
import "./header.css";
import movieIcon from "../../assets/movieIcon.png";

const Header = () => {
  return (
    <>
      {/* <div className="header__container">
        <img src={movieIcon} alt="sdfgsd"></img>
        <span>Movies and TV Shows</span>
      </div> */}

      <nav className="header__container">
        <img src={movieIcon} alt="sdfgsd"></img>
        <span>Movies and TV Shows</span>
        <img src={movieIcon} alt="sdfgsd"></img>
      </nav>
    </>
  );
};

export default Header;
