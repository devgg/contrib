import React, { Component } from "react";
import "./DataTable.css";
import Repository from "./Repository.js";

class DataTable extends Component {
  render() {
    const repositories = this.props.data.filter(row => row.num_issues >= 1);
    if (repositories.length > 0) {
      return (
        <div>
          {repositories.map(row => {
            return <Repository key={row.name_with_owner} {...row} />;
          })}
        </div>
      );
    } else {
      return (
        <Repository
          name_with_owner="nothing found 😢"
          url={null}
          labels={[{ name: "no-help-needed", color: "000", count: -1 }]}
          avatar_url="https://www.meme-arsenal.com/memes/94a9ad7b17dc10347c2e421f750e92af.jpg"
          num_stars={-1}
          num_forks={-1}
          num_issues={-1}
          description="Looks like we could not find any relevant open source projects."
          topics={[]}
        />
      );
    }
  }
}

export default DataTable;
