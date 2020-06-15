import React, { Component } from "react";
import Round from "./round";

class Visualization extends Component {
  state = {
    data: [
      ["a", "b", "c", "d", "e", "f", "g"],
      ["a", "b", "e", "f"],
      ["a", "b", "f"],
      ["a", "f"],
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
          {this.state.data.map((round) => (
            <Round cards={round} />
          ))}
        </div>
      </div>
    );
  }
}

export default Visualization;
