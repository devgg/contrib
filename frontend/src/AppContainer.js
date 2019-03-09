import React, { Component } from "react";
import ReactDom from "react-dom";
import {
  Responsive,
  Button,
  Dropdown,
  Icon,
  Image,
  Segment
} from "semantic-ui-react";
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

class Controls extends Component {
  render() {
    return (
      <Segment className="App-controls">
        <Navigation
          options={this.props.options}
          default={this.props.language.search_term}
          onLanguageChange={this.props.onLanguageChange}
        />
        <LanguageDescription data={this.props.language} />
      </Segment>
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
    window.scrollTo(0, 0);
  };

  render() {
    const language =
      data[this.index.language[this.props.match.params.language]];
    return (
      <div className="App-container" ref={this.myRef}>
        <Responsive minWidth={1000}>
          <Controls
            options={this.options}
            language={language}
            onLanguageChange={this.handleLanguageChange}
          />
          <div className="App-main">
            <DataTable data={language.repositories} />
          </div>
        </Responsive>
        <Responsive maxWidth={999}>
          <Navigation
            options={this.options}
            default={language.search_term}
            onLanguageChange={this.handleLanguageChange}
          />
          <div className="App-main">
            <DataTable data={language.repositories} />
          </div>
        </Responsive>
      </div>
    );
  }
}

export default AppContainer;
