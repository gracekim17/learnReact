import React, { Component } from "react";
import Round from "./round";
import { Sankey } from "react-vis";

const nodes = [
  { name: "a" },
  { name: "b" },
  { name: "c" },
  { name: "d" },
  { name: "e" },
];
const links = [
  { source: 0, target: 1, value: 1 },
  { source: 1, target: 2, value: 1 },
];

class Visualization extends Component {
  state = {
    data: {
      round1: {
        voter1: "a",
        voter2: "b",
        voter3: "c",
        voter4: "d",
      },
      round2: {
        voter1: "a",
        voter2: "b",
        voter3: "a",
        voter4: "d",
      },
      round3: {
        voter1: "a",
        voter2: "b",
        voter3: "d",
        voter4: "a",
      },
      round4: {
        voter1: "a",
        voter2: "b",
        voter3: "b",
        voter4: "b",
      },
    },
  };

  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: 20,
        }}
      >
        {this.transformState().map((round) => (
          <Round cards={round} />
        ))}
        <Sankey
          nodeWidth="2"
          nodes={nodes}
          links={links}
          width={200}
          height={200}
        />

        <div
          id="div1"
          style={{
            width: 100,
            height: 100,
            top: 0,
            left: 0,
            background: "#e53935",
          }}
        ></div>
        <div
          id="div2"
          style={{
            width: "100px",
            height: 100,
            top: 0,
            left: 300,
            background: "#4527a0",
          }}
        ></div>

        <svg>
          <line id="line1" />
        </svg>
      </div>
    );
  }

  transformState() {
    var out = [];
    for (var roundKey in this.state.data) {
      if (this.state.data.hasOwnProperty(roundKey)) {
        var temp = [];

        for (var voterKey in this.state.data[roundKey]) {
          if (this.state.data[roundKey].hasOwnProperty(voterKey)) {
            temp.push(this.state.data[roundKey][voterKey]);
          }
        }
        out.push(temp);
      }
    }
    return out;
  }
}

export default Visualization;
