import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Body.css";
import axios from "axios";

const Body = ({ list, setList, handleClick }) => {
  

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("https://testbackenddeploy.onrender.com");
      setList(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="main-div">
      {list.map((item) => {
        return <Card item={item} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Body;
