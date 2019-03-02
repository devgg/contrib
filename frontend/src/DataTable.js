import React, { Component } from "react";
import "./DataTable.css";
import Repository from "./Repository.js";

class DataTable extends Component {
  render() {
    return (
      <div>
        {this.props.data.filter(row => row.num_issues >= 1).map(row => {
          return <Repository {...row} />;
        })}
      </div>
    );
  }
}

export default DataTable;
