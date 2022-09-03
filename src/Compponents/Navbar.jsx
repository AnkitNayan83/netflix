import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link className="link" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
              className="netflix-logo"
            />
          </Link>
          <Link className="link" to="/">
            <span>Homepage</span>
          </Link>
          <Link className="link" to="/series">
            <span>Series</span>
          </Link>
          <Link className="link" to="/movie">
            <span>Movies</span>
          </Link>
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
              <Link to="/login" className="link">
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
