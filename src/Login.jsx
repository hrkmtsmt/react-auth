import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { path } from "./App";
import { Form, FormGroup, FormButton, FormLabel, FormInput } from "./Form";

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      history.push(path.admin);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      history.push(path.admin);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      <FormButton onClick={handleGoogleLogin} cta={"Sign In with Google"} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor={"email"} label={"Email"} />
          <FormInput
            className={"c-form-input"}
            id={"email"}
            type={"email"}
            placeholder={"example@example.com"}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor={"password"} label={"Password"} />
          <FormInput
            className={"c-form-input"}
            id={"password"}
            type={"password"}
          />
        </FormGroup>
        <FormGroup>
          <FormButton cta={"Login"} />
        </FormGroup>
        <FormGroup>
          <Link to={path.signup}>Sign Up</Link>
        </FormGroup>
      </Form>
    </React.Fragment>
  );
};
