import React, { Component } from "react";
import "../css/menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="my-menu">
        <a href="https://www.w3schools.com">My Home</a>
        <a href="https://www.w3schools.com">Messages</a>
        <a href="https://www.w3schools.com">Profile</a>
        <a href="https://www.w3schools.com">Settings</a>
        <div></div>
      </div>
    );
  }
}

export default Menu;
