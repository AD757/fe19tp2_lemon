import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

import styled from "styled-components";

const UL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

const LI = styled.li`
  flex-basis: 20%;
  text-align: center;
  list-style-type: none;
  padding-top: 20px;
  &:hover {
    background-color: lightgray;
  }
`;

const NavBar = styled.div`
  height: 70px;
`;

const Navigation = () => (
  <NavBar>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </NavBar>
);

const NavigationAuth = () => (
  <UL>
    <LI>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </LI>
    <LI>
      <Link to={ROUTES.HOME}>Home</Link>
    </LI>
    <LI>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </LI>
    {/* {authUser.roles.includes(ROLES.ADMIN) && (
      <LI>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </LI>
    )} */}
    <LI>
      <SignOutButton />
    </LI>
  </UL>
);

const NavigationNonAuth = () => (
  <UL>
    <LI>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </LI>
    <LI>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </LI>
  </UL>
);

export default Navigation;
