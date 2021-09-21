import React from "react";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { path } from "./App";
export const Admin = () => {
  const history = useHistory();
  const handleLogout = () => {
    signOut(auth);
    history.push(path.login);
  };
  return (
    <React.Fragment>
      <h1>Admin</h1>
      <button onClick={handleLogout}>Logout</button>
    </React.Fragment>
  );
};
