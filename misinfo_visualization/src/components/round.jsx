import React, { Component } from "react";

class Round extends Component {
  state = {};

  headlines = [
    {
      headline:
        "Some students will be doing extra lessons during lunch hours. ",
      isMisinfo: true,
      tactic: "Invoking emotions",
    },
    {
      headline: "Track team will be suspended till the end of the semester.",
      isMisinfo: true,
      tactic: "Invoking emotions",
    },
    {
      headline: "School will be beginning at 6 am starting next Monday",
      isMisinfo: true,
      tactic: "Invoking emotions",
    },
    {
      headline:
        "School will be canceling summer vacation to make up for time lost to COVID-19",
      isMisinfo: true,
      tactic: "Invoking emotions",
    },
    {
      headline:
        "Students report multiple bear sightings on campus in the past week",
      isMisinfo: true,
      tactic: "Invoking emotions",
    },
    {
      headline: "New dress code put in place because of 6th graders",
      isMisinfo: true,
      tactic: "Polarisation",
    },
  ];

  render() {
    console.log(this.headlines[1]["headline"]);
    return (
      <div>
        {this.props.cards.map((card) => (
          <div style={{ border: "1px solid green", borderRadius: "10px" }}>
            {this.headlines[card]["headline"]}
          </div>
        ))}
      </div>
    );
  }
}

export default Round;
