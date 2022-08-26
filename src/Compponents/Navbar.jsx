import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.scss";

export const Navbar = () => {
  const [color, setColor] = useState(false);
  window.onscroll = () => {
    setColor(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={color ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="navbar-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="netflix-logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="navbar-right">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          <img
            src="https://i.ibb.co/tpPJjB3/Whats-App-Image-2022-06-21-at-5-48-06-PM.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
