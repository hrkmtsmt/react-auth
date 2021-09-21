import React from "react";
import { path } from "./App";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <Link to={path.login}>Login</Link>
      <br />
      <Link to={path.signup}>Sign Up</Link>
    </React.Fragment>
  );
};
