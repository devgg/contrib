import React, { Component } from "react";
import {
  Responsive,
  Button,
  Dropdown,
  Icon,
  Image,
  Popup,
  Segment
} from "semantic-ui-react";
import DataTable from "./DataTable.js";
import data from "./generated/data.js";
import metadata from "./metadata.js";

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
      <Popup
        on="hover"
        trigger={
          <Button
            animated
            basic
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.url}
          >
            <Button.Content visible>
              <Icon name={this.props.icon} />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        }
      >
        <Popup.Content>
          {this.props.displayName + " on " + this.props.name}
        </Popup.Content>
      </Popup>
    );
  }
}

class LanguageDescription extends Component {
  render() {
    return (
      <div className="LanguageDescription-container">
        <Image
          className="LanguageDescription-image"
          src={this.props.imageUrl}
        />
        <h1>{this.props.displayName}</h1>
        <div className="LanguageDescription-text">{this.props.description}</div>
        <div className="App-social">
          {this.props.links.map(link => {
            return (
              <SocialButton
                key={link.name}
                displayName={this.props.displayName}
                {...link}
              />
            );
          })}
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
          default={this.props.language.name}
          onLanguageChange={this.props.onLanguageChange}
        />
        <LanguageDescription {...this.props.language} />
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
    for (let i = 0; i < data.length; ++i) {
      const language = data[i].name;
      if (metadata[language] === undefined) {
        throw new Error("Metadata not found for: " + language);
      }
      Object.assign(data[i], metadata[language]);
      this.index.language[language] = i;
    }
    for (const language in data) {
      this.options.push({
        key: data[language].name,
        value: data[language].name,
        text: data[language].displayName
      });
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
            default={language.name}
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
