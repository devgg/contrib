import React, { Component } from "react";
import "./Repository.css";
import { Icon, Label, Button } from "semantic-ui-react";

import { Segment } from "semantic-ui-react";

function format_number(num) {
  if (num >= 1000000) {
    return Math.floor(num / 1000000) + "m";
  }
  if (num >= 1000) {
    return Math.floor(num / 1000) + "k";
  }
  return num;
}

class Stats extends Component {
  render() {
    return (
      <div className="Stats-container">
        <div>
          <Icon className="Stats-star" name="star" />
          {format_number(this.props.num_stars)}
        </div>
        <div>
          <Icon className="Stats-fork" name="fork" />
          {format_number(this.props.num_forks)}
        </div>
        <div>
          <Icon className="Stats-issue" name="exclamation circle" />
          {format_number(this.props.num_issues)}
        </div>
      </div>
    );
  }
}

class Description extends Component {
  render() {
    let num_topics = 0;
    let topics_char_count = 0;
    for (; num_topics < this.props.topics.length; ++num_topics) {
      topics_char_count += this.props.topics[num_topics].name.length;
      if (topics_char_count >= 60) {
        break;
      }
    }
    return (
      <div className="Description-container">
        <a
          className="Description-link"
          target="_blank"
          rel="noopener noreferrer"
          href={
            this.props.url +
            '/issues?q=is:open is:issue label:"' +
            this.props.label_counts[0][0] +
            '"'
          }
        >
          {this.props.name_with_owner}
        </a>
        <div className="Description-text">{this.props.description}</div>
        <div className="Repository-topics">
          {this.props.topics.slice(0, num_topics).map(topic => {
            return (
              <Label
                className="Repository-topic"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={topic.url}
              >
                {topic.name}
              </Label>
            );
          })}
        </div>
      </div>
    );
  }
}

//<Label as="a" color="orange" ribbon="right">
//  Specs
//</Label>
class Repository extends Component {
  render() {
    return (
      <Segment>
        <div className="Repository-container">
          <Stats
            num_stars={this.props.num_stars}
            num_forks={this.props.num_forks}
            num_issues={this.props.num_issues}
          />
          <Description
            name_with_owner={this.props.name_with_owner}
            url={this.props.url}
            description={this.props.description}
            label_counts={this.props.label_counts}
            topics={this.props.topics}
          />
        </div>
      </Segment>
    );
  }
}

export default Repository;
