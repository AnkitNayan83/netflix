import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Listitem.scss";

export const Listitems = ({ index }) => {
  const [isHovered, setHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listitems"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="list-itemInfo">
            <div className="list-icons">
              <PlayArrow className="list-icon" />
              <Add className="list-icon" />
              <ThumbUpOutlined className="list-icon" />
              <ThumbDownOutlined className="list-icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 45 mins</span>
              <span className="limit">18+</span>
              <span>2018</span>
            </div>
            <div className="item-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident,
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};
