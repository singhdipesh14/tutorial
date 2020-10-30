import React from "react";
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img
          className="navimg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          alt="react logo"
        />
        <a href="#" id="reactlink">
          <span className="react">React</span>
        </a>
        <span className="navtext">
          <a href="#">Docs</a>
          <a href="#">Tutorial</a>
          <a href="#">Blog</a>
          <a href="#">Community</a>
        </span>
        <form id="searchForm">
          <input id="searchBar" type="text" placeholder="Search" />
        </form>
        <span className="navtext2">
          <a href="#">v17.01</a>
          <a href="#">Languages</a>
          <a href="#">GitHub</a>
        </span>
      </div>
    );
  }
}

//https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png
