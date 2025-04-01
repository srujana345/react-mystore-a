import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { users, user, setUser } = useContext(appContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handlesubmit = () => {
    const found = users.find(
      (value) => value.email === user.email && value.password === user.password
    );
    if (found) {
      setMsg("Welcome!");
      setUser({ ...user, name: found.name });
      navigate("/products");
    } else {
      setMsg("Invalid credentials");
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      <h3>{msg}</h3>
      <p>
        <input type="text" placeholder="Email address"
        onChange={(e)=>setUser({...user,email:e.target.value})}></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </p>
      <p>
        <button onClick={handlesubmit}>Log In</button>
      </p>
      <p>
        <Link to="../register">Create Account</Link>
      </p>
    </div>
  );
}
