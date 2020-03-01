import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../store/actions/auth";
import requireAuth from "./hoc/requireAuth";
import Willys from "./Willys";
import Coop from "./Coop";

const Home = ({ signout, email }) => {
  return (
    <div className="page">
      {email.includes("gmail") ? (
        <Willys signout={signout} />
      ) : (
        <Coop signout={signout} />
      )}

      <h1>Welcome to Landing Page for users </h1>
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
)(Home);
