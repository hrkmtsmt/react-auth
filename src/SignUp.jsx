import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { path } from "./App";
import { auth } from "./firebase";

export const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      history.push(path.home);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
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
          <button>Sign Up</button>
        </div>
      </form>
    </React.Fragment>
  );
};
