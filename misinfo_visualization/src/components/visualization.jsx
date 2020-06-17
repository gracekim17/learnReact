import React, { Component } from "react";
import Round from "./round";
import LineTo from "react-lineto";
import { Line } from "react-lineto";
import "../css/visualization.css";

class Visualization extends Component {
  state = {
    data: [
      [0, 1, 2, 3, 4, 5],
      [1, 3, 4, 5],
      [1, 3, 5],
      [3, 5],
    ],
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: 20,
          }}
        >
          <h1>All Headlines</h1>
          <h1>After Round 1:</h1>
          <h1>After Round 2:</h1>
          <h1>After Round 3:</h1>
          {this.state.data.map((round) => (
            <Round cards={round} />
          ))}
        </div>
        <div>
          <div className="A">Element A</div>
          <div className="B">Element B</div>
          <LineTo from="A" to="B" />
        </div>
        <Line x0={0} y0={0} x1={10} y1={10} />
      </div>
    );
  }
}

export default Visualization;
