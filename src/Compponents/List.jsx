import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import "./List.scss";
import { Listitems } from "./Listitems";

export const List = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [show, setShow] = useState(false);

  const listRef = useRef();

  const handelClick = (direction) => {
    setShow(true);
    let distance = listRef.current.getBoundingClientRect().x - 50; // distance of the container
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNum < 5) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handelClick("left")}
          className="icons left"
          style={{ display: !show && "none" }}
        />

        <div className="container" ref={listRef}>
          <Listitems index={0} />
          <Listitems index={1} />
          <Listitems index={2} />
          <Listitems index={3} />
          <Listitems index={4} />
          <Listitems index={5} />
          <Listitems index={6} />
          <Listitems index={7} />
          <Listitems index={8} />
          <Listitems index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handelClick("right")}
          className="icons right"
        />
      </div>
    </div>
  );
};
