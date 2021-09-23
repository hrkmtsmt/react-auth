import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import login from "../img/login.svg";
import { auth } from "../firebase";
import { path } from "../App";
import {
  Form,
  FormTitle,
  FormInput,
  FormPartition,
  FormButtonPrimary,
} from "../components/Form";
import { Grid, Large } from "../components/layout/Grid";
import { Box } from "../components/Box";
import { GoogleSignUpButton } from "../components/GoogleSignUp";
import {
  emailErrorMessage,
  passwordErrorMessage,
} from "../firebase-error-message";

export const Login = () => {
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      history.push(path.admin);
    } catch (error) {
      setEmailError(emailErrorMessage(error.code));
      setPasswordError(passwordErrorMessage(error.code));
    }
  };
  const email = "email";
  const password = "password";
  return (
    <Grid>
      <Large>
        <div className={"c-image-wrapper"}>
          <img src={login} alt="" />
        </div>
      </Large>
      <Large>
        <Box>
          <Form onSubmit={handleSubmit}>
            <FormTitle title={"Login"} />
            <GoogleSignUpButton />
            <FormPartition label={"OR"} />
            <FormInput
              id={email}
              type={email}
              label={"Email"}
              placeholder={"example@example.com"}
              error={emailError && emailError}
            />
            <FormInput
              id={password}
              type={password}
              label={"Password"}
              error={passwordError && passwordError}
            />
            <FormButtonPrimary cta={"Login"} />
          </Form>
        </Box>
      </Large>
    </Grid>
  );
};
