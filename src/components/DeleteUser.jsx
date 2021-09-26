import React, { useState } from "react";
import { deleteUser } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { path } from "../App";
import { ButtonDanger } from "./Button";

export const DeleteUser = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    try {
      await deleteUser(user);
      history.push(path.home);
    } catch (error) {
      setError(error.code);
    }
  };
  console.log(error);
  return <ButtonDanger onClick={handleDeleteUser} cta={"Delete Account"} />;
};
