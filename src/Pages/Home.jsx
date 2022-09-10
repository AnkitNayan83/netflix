import React, { useEffect, useState } from "react";
import { Featured } from "../Compponents/Featured";
import { List } from "../Compponents/List";
import { Navbar } from "../Compponents/Navbar";
import "./Home.scss";
import axios from "axios";

export const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState("");
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGRjZjhiMWI0NmU3MjkyMTdhOTdjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjYyNzcxNiwiZXhwIjoxNjYyODg2OTE2fQ.0xpB5cksLu-tJnyKMGPpIvUO-AvR9AopE_foDiTaXKU",
            },
          }
        );
        console.log(res.data);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};
