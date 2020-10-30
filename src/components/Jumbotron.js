import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div id="jumbotron">
        <div className="reactHome">React</div>
        <div id="jtext">A JavaScript library for building user interfaces</div>
        <div>
          <button className="getStarted">Get Started</button>
          <a href="#" id="jlinks">
            Take the Tutorial
          </a>
        </div>
      </div>
    );
  }
}
