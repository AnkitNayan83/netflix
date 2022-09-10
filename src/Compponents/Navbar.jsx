import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../AuthContext/Authactions";
import { AuthContext } from "../AuthContext/Authcontext";
import "./Navbar.scss";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
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
          <img src={user.profilePic} alt="" />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
