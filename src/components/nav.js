import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";


import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;
  // border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 100px;
  // background: white;
  

.logo a {
  padding-top: 33px;
  display: flex;
  flex-direction: column;
  clear: both;
  padding-bottom: 30px;
  text-decoration: none;
  color:white;

p {
  width: 200px;
  display: block;
}
em {
  font-size: 0.5em;
  float: left;
  display: block;
  width: 200px;
img {
  display: inline-block;
  margin-top: 5px;
  width: 15px;
  float: left;
}

.letterhead {
  display: inline-block;
  line-height: 260%;
  float: left;
}
}
}

.gray {
  color: #ccc;
}
a {
  color: #222;
  // opacity: 0.55;
  transition: all 0.6s;
  color: #222;
  font-size: 1em;
}
a:hover {
  opacity: 1;
}
.fa-bars {
  display: none;
  color: #222;
  font-size: 2rem;
}
nav {
ul {
  display: flex;
  justify-content: space-between;
}
li {
  margin: 0 15px;
  justify-content: space-between;
  font-size: 1em;
}
a {
  font-size: 1em;
  text-decoration: none;
  color:white;

.active {
  color: tomato;
}
}
a.active {
  color: #ff64c5;
}
}

@media only screen and (max-width: 900px) {
  padding: 0px;

.logo {
  padding-left: 15px;
  padding-top: 0px !important;
}
}
@media only screen and (max-width: 900px) {
  height: auto;
  min-height: 50px;
  display: block;
  position: relative;

.logo {
  width: 100%;
  display: block;
  padding-top: 20px;
  margin: 0px;
  margin-left: -5px;

a {
  padding: 20px 0px;
}
}

.fa-bars {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

ul.collapsed {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow: hidden;
  max-height: 0;

&.is-expanded {
  overflow: hidden;
  max-height: 500px;
}

li {
  padding: 15px 10px;
  margin: 0px 0px;
  width: 100%;
}
  }
    }
      `
    ;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <Navigation>
                <div className="logo">
                    <Link to="/">
                        <p>B-E-V</p>
                        <em>
                            <div className="letterhead">
                                <span className="name">BEV</span>
                                <span className="gray">.com</span>
                            </div>
                        </em>
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink activeClassName="active" to="/myprofile">
                            <li>PROFILE</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/food">
                            <li>FOOD</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/database">
                            <li>DATABASE</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/about">
                            <li>ABOUT</li>
                        </NavLink>
                    </ul>
                </nav>
            </Navigation>
        );
    }
}

export default Nav;