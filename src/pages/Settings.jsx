import React from "react";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { path } from "../App";
import {
  Form,
  FormTitle,
  FormGroup,
  FormButtonPrimary,
} from "../components/Form";
import { Grid, Large } from "../components/layout/Grid";
import { Box } from "../components/Box";
import settings from "../img/signup.svg";
import { DeleteUser } from "../components/DeleteUser";
export const Settings = () => {
  const history = useHistory();
  const handleLogout = () => {
    signOut(auth);
    history.push(path.home);
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
            <Form>
              <FormTitle title={"Settings"} />
              <FormGroup>
                <FormButtonPrimary onClick={handleLogout} cta={"Logout"} />
              </FormGroup>
              <FormGroup>
                <DeleteUser />
              </FormGroup>
            </Form>
          </Box>
        </Large>
      </Grid>
    </React.Fragment>
  );
};
