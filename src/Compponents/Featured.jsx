import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./Featured.scss";

export const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Tv Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://r4.wallpaperflare.com/wallpaper/462/921/235/stranger-things-5k-wallpaper-2fec58612e88a64444271275d3388ea9.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.freepnglogos.com/uploads/stranger-things-logo-png/stranger-things-red-logo-vector-free-download-5.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          mollitia hic qui ducimus at suscipit reiciendis exercitationem, enim
          molestiae, facere quasi! Optio numquam error, voluptatibus laudantium
          corporis reiciendis minima hic.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
