import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Basket from "./Components/Basket";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [warn, setWarn] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://127.0.0.1:3030/cart");
      setItems(res.data);
    };
    fetchData();
  }, []);

  const handleClick = async (newItem) => {
    const checkItem = items.filter((item) => item.title === newItem.title);
    if (checkItem.length > 0) {
      setWarn(true);
      setTimeout(() => {
        setWarn(false);
      }, 2000);
    } else {
      const addData = await axios.post("http://127.0.0.1:3030/cart", {
        title: newItem["title"],
        price: newItem["price"],
        description: newItem["description"],
        category: newItem["category"],
        image: newItem["image"],
      });
      setItems((prevItem) => [...prevItem, addData.data]);
    }
  };

  const handleRemove = async (removeItem) => {
    const res = await axios.delete(
      `http://127.0.0.1:3030/cart/${removeItem._id}`
    );
    setItems(items.filter((item) => item._id != removeItem._id));
  };

  return (
    <div className="app-main-div">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route
            path="home"
            element={
              <>
                <Navbar count={items.length} />
                {warn && <h2 className="warn">Item already added</h2>}
                <Body list={list} setList={setList} handleClick={handleClick} />
              </>
            }
          />
          <Route
            path="cart"
            element={
              <>
                <Navbar count={items.length} />
                <Basket items={items} handleRemove={handleRemove} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
