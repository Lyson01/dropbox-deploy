/** @format */

import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/extraReducer";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLogin({ email: email, password: password }));
  };
  return (
    <div>
      <div class="auth">
        <img src="./Images/asilbek.gif" alt="gif" />
        <form class="form-1" onSubmit={handleSubmit}>
          <h1>Drobbox Login</h1>
          <label for="email" style={{color: 'white'}}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="password" style={{color: 'white'}}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={{ color: "#fff" }}>
          Don't have an account yet?{" "}
            <Link to="/register">

              <b className="signin">Sign in</b>
            </Link>
          </span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
