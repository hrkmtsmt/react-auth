import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  emailErrorMessage,
  passwordErrorMessage,
} from "../firebase-error-message";
import { useHistory } from "react-router-dom";
import signup from "../img/signup.svg";
import { path } from "../App";
import {
  Form,
  FormTitle,
  FormInput,
  FormPartition,
  FormButtonPrimary,
} from "../components/Form";
import { Box } from "../components/Box";
import { Grid, Large } from "../components/layout/Grid";
import { GoogleSignUpButton } from "../components/GoogleSignUp";

export const SignUp = () => {
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      history.push(path.settings);
    } catch (error) {
      setEmailError(emailErrorMessage(error.code));
      setPasswordError(passwordErrorMessage(error.code));
    }
  };
  return (
    <Grid>
      <Large>
        <div className={"c-image-wrapper"}>
          <img src={signup} alt="" />
        </div>
      </Large>
      <Large>
        <Box>
          <Form onSubmit={handleSubmit}>
            <FormTitle title={"Sign Up"} />
            <GoogleSignUpButton />
            <FormPartition label={"OR"} />
            <FormInput
              id={"email"}
              type={"email"}
              label={"Email"}
              placeholder={"example@example.com"}
              error={emailError && emailError}
            />
            <FormInput
              id={"password"}
              label={"Password"}
              type={"password"}
              error={passwordError && passwordError}
            />
            <FormButtonPrimary cta={"Sign Up"} />
          </Form>
        </Box>
      </Large>
    </Grid>
  );
};
