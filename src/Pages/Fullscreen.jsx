import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Fullscreen.scss";

export const Fullscreen = () => {
  return (
    <div className="fullscreen">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined className="back-icon" />
          Home
        </div>
      </Link>
      <video
        src="https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4"
        className="fullscreen-video"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
};
