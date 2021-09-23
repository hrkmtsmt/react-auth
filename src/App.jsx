import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Settings } from "./pages/Settings";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import "./style/style.scss";
import { Layout } from "./components/layout/Layout";

export const path = {
  home: "/",
  login: "/login",
  signup: "/signup",
  settings: "/settings",
};
const App = () => {
  return (
    <Layout>
      <AuthProvider>
        <BrowserRouter>
          <PrivateRoute exact path={path.settings} component={Settings} />
          <PublicRoute exact path={path.home} component={Home} />
          <PublicRoute path={path.signup} component={SignUp} />
          <PublicRoute path={path.login} component={Login} />
        </BrowserRouter>
      </AuthProvider>
    </Layout>
  );
};
export default App;
