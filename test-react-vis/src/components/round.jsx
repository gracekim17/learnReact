import React, { Component } from "react";

class Round extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.cards.map((card) => (
          <h1 style={{ border: "1px solid green", borderRadius: "10px" }}>
            {card}
          </h1>
        ))}
      </div>
    );
  }
}

export default Round;
