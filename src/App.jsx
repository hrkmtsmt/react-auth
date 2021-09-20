import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";

export const path = {
  home: "/",
  login: "/login",
  signup: "/signup",
};
const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <PrivateRoute exact path={path.home} component={Home} />
          <Route path={path.login} component={Login} />
          <Route path={path.signup} component={SignUp} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};
export default App;
