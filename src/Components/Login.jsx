import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");
  const [login, setLogin] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const baseUrl = "https://testbackenddeploy.onrender.com";
  // const baseUrl = "http://127.0.0.1:3030";


  const navigate = useNavigate();

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const res = await axios.post(baseUrl+"/login", {
      username: username,
      password: password,
    });
    if (res.data.token) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setLogin("Logged In Succesfully");
    } else {
      setLogin(res.data);
      setTimeout(() => {
        setLogin("");
      }, 1000);
    }
  };

  const handleRegister = async () => {
    const res = await axios
      .post(baseUrl+"/register", {
        username: username,
        password: password,
      })
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
    setRegister(res.data);
    setTimeout(() => {
      setRegister("");
    }, 1000);
  };

  const getHome = async () => {
    const verify = await axios
      .post(baseUrl+"/verify", {
        token: token,
      })
      .then((response) => response)
      .catch((err) => {
        console.log(err);
      });
    console.log(verify);
    if (verify && verify.status == 200) {
      navigate("/home");
    }
  };

  useEffect(() => {
    getHome();
  }, [token]);

  return (
    <div className="Login-body">
      <div className="Login-div">
        <div className="upper-div"></div>
        <div className="lower-div">
          {register && <h2>{register}</h2>}
          {login && <h2>{login}</h2>}
          <h1>Login Form</h1>
          <div className="container">
            <div className="username-div">
              <input type="text" value={username} onChange={handleUserChange} placeholder="Username"/>
            </div>
            <div className="password-div">
              <input
                type="password"
                value={password}
                onChange={handlePassChange}
                placeholder="Password"
              />
            </div>
            <div className="button-div">
              <button onClick={handleRegister}>Register</button>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
