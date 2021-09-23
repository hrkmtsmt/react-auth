import React from "react";
import home from "../img/home.svg";
import { path } from "../App";
import { Link } from "react-router-dom";
import { Box } from "../components/Box";
import { Form, FormTitle, FormGroup } from "../components/Form";
import { Button, ButtonBorder } from "../components/Button";
import { Grid, Large } from "../components/layout/Grid";
export const Home = () => {
  return (
    <Grid>
      <Large>
        <div className={"c-image-wrapper"}>
          <img src={home} alt="" />
        </div>
      </Large>
      <Large>
        <Box>
          <Form>
            <FormTitle title={"Form"} />
            <FormGroup>
              <Link to={path.signup}>
                <Button cta={"Sign Up"} />
              </Link>
            </FormGroup>
            <FormGroup>
              <Link to={path.login}>
                <ButtonBorder cta={"Login"} />
              </Link>
            </FormGroup>
          </Form>
        </Box>
      </Large>
    </Grid>
  );
};
