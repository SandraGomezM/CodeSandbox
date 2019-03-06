import React, { Component } from "react";
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
