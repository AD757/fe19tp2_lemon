import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from "../../constants/roles";
import styled from 'styled-components'

const UL = styled.ul`
    padding: 0;
    margin: 0;
    text-align: center;
    display: flex;
    vertical-align: top;
    justify-content: space-evenly;
    align-items: left;
    font-family: "Montserrat", sans-serif;
`

const LI = styled.li`
  position: relative;
  top: 0;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width:100%;
  background: #2cb84a;
`


const NavBar = styled.div`
    height: 55px;
    a {
    font-family: "Montserrat", sans-serif;
    color: black;
    text-transform: uppercase;
    padding: 10px;
    box-sizing: border-box;
    height: 35px;
  }

  a:hover {
   color: white;
   font-size: 17px;
   text-shadow: 2px 2px 5px gray;
  
  }
`

const Navigation = () => (
  <NavBar>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
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
