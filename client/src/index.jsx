import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Stocks from "./pages/Stocks";

export const CredentialsContext = React.createContext();

function App() {

  const credentialsState = useState();

  return(
    <CredentialsContext.Provider value={credentialsState}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Stocks />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </CredentialsContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))