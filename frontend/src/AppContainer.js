import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Dropdown, Sticky, Icon, Image } from "semantic-ui-react";
import DataTable from "./DataTable.js";
import data from "./generated/data.js";

class Navigation extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    return (
      <Dropdown
        className="App-dropdown"
        placeholder="Select Language"
        fluid
        search
        selection
        options={this.props.options}
        onChange={this.props.onLanguageChange}
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

class AppContainer extends Component {
  options = [];
  index = {
    language: {}
  };

  constructor() {
    super();
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

  handleLanguageChange = (e, { value }) => {
    this.props.history.push("/language/" + value);
  };

  render() {
    const language =
      data[this.index.language[this.props.match.params.language]];
    return (
      <div className="App-container" ref={this.handleContextRef}>
        <Sidebar cls={"App-sidebar-left"}>
          <Navigation
            options={this.options}
            onLanguageChange={this.handleLanguageChange}
          />
        </Sidebar>
        <div className="App-main">
          <DataTable data={language.repositories} />
        </div>
        <Sidebar cls={"App-sidebar-right"}>
          <LanguageDescription data={language} />
        </Sidebar>
      </div>
    );
  }
}

export default AppContainer;
