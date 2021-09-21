import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import "./style/style.scss";

export const path = {
  home: "/",
  login: "/login",
  signup: "/signup",
  admin: "/admin",
};
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoute exact path={path.admin} component={Admin} />
        <PublicRoute exact path={path.home} component={Home} />
        <PublicRoute path={path.login} component={Login} />
        <PublicRoute path={path.signup} component={SignUp} />
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
