import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Body.css";
import axios from "axios";
import { BiLoaderCircle } from "react-icons/bi";

const Body = ({ list, setList, handleClick }) => {
  
  const baseUrl = "https://testbackenddeploy.onrender.com";
  // const baseUrl = "http://127.0.0.1:3030";

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        baseUrl+"/home"
      );
      setList(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="main-div">
      {list.length == 0 && (
        <div className="loader-div">
          <h2>Loading</h2>
          <BiLoaderCircle className="loader" />
        </div>
      )}
      {list.map((item) => {
        return <Card item={item} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Body;
