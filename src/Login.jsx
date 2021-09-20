import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { path } from "./App";

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      history.push(path.home);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      history.push(path.home);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            name={"email"}
            type={"email"}
            placeholder={"example@example.com"}
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} name={"password"} type={"password"} />
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </form>
      <button onClick={handleGoogleLogin}>Sign In with Google</button>
    </React.Fragment>
  );
};
