import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../store/actions/auth";
import requireAuth from "./hoc/requireAuth";
import Project from "./Project";

const Main = ({ signout }) => {
  return (
    <div className="page">
      <div className="nav-bar">
        <div className="menu-items">
          <a className="menu-item" href="https://www.w3schools.com">
            Home
          </a>
          <a className="menu-item" href="https://www.w3schools.com">
            Recipies
          </a>
          <a className="menu-item" href="https://www.w3schools.com">
            About
          </a>
        </div>

        <div>
          {/* <button className="btn-switch" onClick={() => signout()}>Log out</button> */}
          <a className=" logout-btn" onClick={() => signout()}>
            Logout
          </a>
        </div>
      </div>

      <Project />

      <h1>Welcome to Landing Page for users</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  requireAuth
)(Main);
