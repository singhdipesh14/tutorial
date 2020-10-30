import React from "react";
import Jumbotron from "./Jumbotron";
import Description from "./Description";
import FooterLink from "./FooterLink";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Jumbotron />
        <Description />
        <hr />
        <FooterLink />
      </div>
    );
  }
}
