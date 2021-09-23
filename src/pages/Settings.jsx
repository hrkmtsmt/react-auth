import React from "react";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { path } from "../App";
import {
  Form,
  FormTitle,
  FormButton,
  FormInput,
  FormPartition,
} from "../components/Form";
import { Grid, Large } from "../components/layout/Grid";
import { Box } from "../components/Box";
import settings from "../img/signup.svg";
export const Settings = () => {
  const history = useHistory();
  const handleLogout = () => {
    signOut(auth);
    history.push(path.login);
  };
  return (
    <React.Fragment>
      <Grid>
        <Large>
          <div className={"c-image-wrapper"}>
            <img src={settings} alt="" />
          </div>
        </Large>
        <Large>
          <Box>
            <FormTitle title={"Settings"} />
            <FormButton onClick={handleLogout} cta={"Logout"} />
          </Box>
        </Large>
      </Grid>
    </React.Fragment>
  );
};
