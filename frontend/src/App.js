import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./AppContainer.js";
import data from "./generated/data.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/language/:language" component={AppContainer} />
          <Route path="" render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
