import React, { Component } from "react";
import { Button, Dropdown, Icon, Image, Segment } from "semantic-ui-react";
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
        defaultValue={this.props.default}
        options={this.props.options}
        onChange={this.props.onLanguageChange}
      />
    );
  }
}

class SocialButton extends Component {
  render() {
    return (
      <Button animated basic>
        <Button.Content visible>
          <Icon name={this.props.icon} />
        </Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    );
  }
}

class LanguageDescription extends Component {
  render() {
    return (
      <div className="LanguageDescription-container">
        <Image
          className="LanguageDescription-image"
          src={this.props.data.image}
        />
        <h1>{this.props.data.display_name}</h1>
        <div className="LanguageDescription-text">
          {this.props.data.description}
        </div>
        <div className="App-social">
          <SocialButton icon="github" />
          <SocialButton icon="stack overflow" />
          <SocialButton icon="wikipedia w" />
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
    this.myRef = React.createRef();
  }

  handleLanguageChange = (e, { value }) => {
    this.props.history.push("/language/" + value);
  };

  render() {
    const language =
      data[this.index.language[this.props.match.params.language]];
    return (
      <div className="App-container" ref={this.myRef}>
        <Segment className="App-controls">
          <Navigation
            options={this.options}
            default={language.search_term}
            onLanguageChange={this.handleLanguageChange}
          />
          <LanguageDescription data={language} />
        </Segment>
        <div className="App-main">
          <DataTable data={language.repositories} />
        </div>
      </div>
    );
  }
}

export default AppContainer;
