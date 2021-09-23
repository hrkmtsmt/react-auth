import React from "react";
import { useHistory } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, providerGoogle } from "../firebase";
import { path } from "../App";
import { Button } from "./Button";

export const GoogleSignUpButton = () => {
  const history = useHistory();
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, providerGoogle);
    history.push(path.admin);
  };
  return <Button onClick={handleGoogleLogin} cta={"Sign In with Google"} />;
};
