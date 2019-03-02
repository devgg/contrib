import React, { Component } from "react";
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import DataTable from "./DataTable.js";
import data from "./generated/data.js";
import {
  Button,
  Label,
  Dropdown,
  Sticky,
  Menu,
  Icon,
  Card,
  Image
} from "semantic-ui-react";

class Test extends Component {
  state = {};
  constructor() {
    super();
    this.state = { redirect: null };
  }

  handleLanguageChange = (e, { value }) => {
    this.setState({ redirect: value });
  };

  render() {
    if (this.state.redirect !== null) {
      const redirect = <Redirect to={"/language/" + this.state.redirect} />;
      this.setState({ redirect: null });
      return redirect;
    }

    return (
      <div className="App-container" ref={this.handleContextRef}>
        <div className="App-sidebar App-sidebar-left" />
        <div className="App-main">
          <DataTable data={this.props.data.repositories} />
        </div>
      </div>
    );
  }
}

class Navigation extends Component {
  state = {};
  constructor() {
    super();
    this.state = { redirect: null };
  }

  handleLanguageChange = (e, { value }) => {
    this.setState({ redirect: value });
  };

  render() {
    if (this.state.redirect !== null) {
      const redirect = <Redirect to={"/language/" + this.state.redirect} />;
      this.setState({ redirect: null });
      return redirect;
    }

    return (
      <Dropdown
        className="App-dropdown"
        placeholder="Select Language"
        fluid
        search
        selection
        options={this.props.options}
        onChange={this.handleLanguageChange}
      />
    );
  }
}

class LanguageDescription extends Component {
  render() {
    return (
      <div>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
        <h1>{this.props.data.display_name}</h1>
        <div>{this.props.data.description}</div>
        <div className="App-social">
          <Button animated>
            <Button.Content visible>
              <Icon name="github" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Button animated>
            <Button.Content visible>
              <Icon name="stack overflow" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          <Button animated>
            <Button.Content visible>
              <Icon name="wikipedia w" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className={`App-sidebar ${this.props.cls}`}>
        {this.props.children}
      </div>
    );
  }
}
//App-sidebar-right
class App extends Component {
  state = {};
  options = [];
  index = {
    language: {}
  };

  constructor() {
    super();
    this.state = { index: 0 };
    for (const language in data) {
      this.options.push({
        key: data[language].search_term,
        value: data[language].search_term,
        text: data[language].display_name
      });
    }
    for (let i = 0; i < data.length; ++i) {
      this.index.language[data[i].search_term] = i;
    }
    console.log(this.options);
  }

  handleContextRef = contextRef => this.setState({ contextRef: contextRef });
  render() {
    //const { contextRef } = this.state.contextRef;
    return (
      <Router>
        <Switch>
          <Route
            path="/language/:language"
            render={props => {
              const language =
                data[this.index.language[props.match.params.language]];
              return (
                <div className="App-container" ref={this.handleContextRef}>
                  <Sidebar cls={"App-sidebar-left"}>
                    <Navigation options={this.options} />
                  </Sidebar>
                  <div className="App-main">
                    <DataTable data={language.repositories} />
                  </div>
                  <Sidebar cls={"App-sidebar-right"}>
                    <LanguageDescription data={language} />
                  </Sidebar>
                </div>
              );
            }}
          />
          <Route path="" render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

//              <Test
//                data={data[props.match.params.language]}
//                options={this.options}
//              />
export default App;
