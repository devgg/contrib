import React, { Component } from "react";
import {
  Responsive,
  Label,
  Button,
  Dropdown,
  Icon,
  Image,
  Popup,
  Segment
} from "semantic-ui-react";
import DataTable from "./DataTable.js";
import data from "./generated/data.json";
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
    const linkName = this.props.displayName + " on " + this.props.name;
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
            aria-label={linkName}
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
          {linkName}
        </Popup.Content>
      </Popup>
    );
  }
}

class GitHubLink extends Component {
  render() {
    return (
      <Label
        className="App-github"
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/devgg/contrib"
      >
        <Icon className="App-github-icon" name="github" />
        View on GitHub
      </Label>
    );
  }
}

class LanguageDescription extends Component {
  render() {
    return (
      <div className="LanguageDescription-container">
        <Image
          className="LanguageDescription-image"
          src={this.props.image_url}
          alt={"logo of the " + this.props.displayName + " programming language"}
        />
        <div
          className="LanguageDescription-text"
          dangerouslySetInnerHTML={{ __html: this.props.summary_html }}
        />
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
        <GitHubLink />
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
      const language = data[i];
      const name = language.name;
      this.sortRepositories(language.repositories);
      if (metadata[name] === undefined) {
        throw new Error("Metadata not found for: " + name);
      }
      language.displayName = metadata[name].displayName;
      language.links = metadata[name].links;
      if (metadata[name].imageOverrideUrl != null) {
        language.image_url = metadata[name].imageOverrideUrl;
      }
      this.index.language[name] = i;
    }
    for (const language in data) {
      this.options.push({
        key: data[language].name,
        value: data[language].name,
        text: data[language].displayName
      });
    }
  }

  sortRepositories(repositories) {
    return repositories.sort(
      (r1, r2) =>
        Math.log10(r2.num_stars) * r2.num_issues -
        Math.log10(r1.num_stars) * r1.num_issues
    );
  }

  handleLanguageChange = (e, { value }) => {
    this.props.history.push("/language/" + value);
    window.scrollTo(0, 0);
  };

  render() {
    const language =
      data[this.index.language[this.props.match.params.language]];
    return (
      <React.Fragment>
        <Responsive minWidth={1000} as="div" className="App-container">
          <Controls
            options={this.options}
            language={language}
            onLanguageChange={this.handleLanguageChange}
          />
          <div className="App-main">
            <DataTable repositories={language.repositories} />
          </div>
        </Responsive>
        <Responsive maxWidth={999} as="div" className="App-container">
          <div className="App-mobile-header">
            <Navigation
              options={this.options}
              default={language.name}
              onLanguageChange={this.handleLanguageChange}
            />
            <GitHubLink />
          </div>
          <div className="App-main">
            <DataTable repositories={language.repositories} />
          </div>
        </Responsive>
      </React.Fragment>
    );
  }
}

export default AppContainer;
