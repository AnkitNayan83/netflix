import React from "react";
import { Featured } from "../Compponents/Featured";
import { List } from "../Compponents/List";
import { Navbar } from "../Compponents/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};
