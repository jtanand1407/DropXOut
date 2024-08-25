import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Basket from "./Components/Basket";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [warn, setWarn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://testbackenddeploy.onrender.com/cart"
      );
      setItems(res.data);
    };
    fetchData();
  }, []);

  const handleClick = async (newItem) => {
    const addData = await axios.post(
      "https://testbackenddeploy.onrender.com/cart",
      {
        title: newItem["title"],
        price: newItem["price"],
        description: newItem["description"],
        category: newItem["category"],
        image: newItem["image"],
      }
    );
    console.log(addData);
    setItems((prevItem)=> [...prevItem,addData.data])
  };

  const handleRemove = async (removeItem) => {
    const res = await axios.delete(
      `https://testbackenddeploy.onrender.com/cart/${removeItem._id}`
    );
    setItems(items.filter((item)=> item._id != removeItem._id))
  };

  return (
    <div className="app-main-div">
      <BrowserRouter>
        <Navbar count={items.length} />
        {warn && <h2 className="warn">Item already added</h2>}
        <Routes>
          <Route path="/" element={<Body handleClick={handleClick} />} />
          <Route
            path="cart"
            element={<Basket items={items} handleRemove={handleRemove} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
