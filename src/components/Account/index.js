import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
//import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
// import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1 className="sign">Account: {authUser.email}</h1>
        {/* <PasswordForgetForm /> */}
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
