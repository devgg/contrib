import React, { Component } from "react";
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import AppContainer from "./AppContainer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/language/:language" component={AppContainer} />
          <Route path="" render={() => <Redirect to="/language/cpp" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
