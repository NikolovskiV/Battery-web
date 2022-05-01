import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Page2.css";

export default function Page2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();

    try {
      const signInData = {
        email,
        password,
      };
      await axios.post("http://localhost:4000/auth/signin", signInData);
      await getLoggedIn();
      navigate("/statistics");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={signIn}>
      <div className="login-form">
        <div className="form-group ">
          <label htmlFor="email">Email </label>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>

        <div className="form-group">
          <label className="lab" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>

        <div className="btn-form">
          <input type="submit" value="SIGN IN" className="log-btn" />
        </div>
        <div className="register">
          <Link className="link-two" to="/register">
            Register New User
          </Link>
          <a className="link" href="/">
            Forgot password?
          </a>
        </div>
      </div>
    </form>
  );
}
