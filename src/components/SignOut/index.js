import React from 'react';
import { withFirebase } from '../Firebase';
import Styled from 'styled-components'

const StyledButton = Styled.button`
display: flex;
align-content: center;
align-items: center;
justify-content: space-around;
width: 40%;
padding: 10px;
`
const SignOutButton = ({ firebase }) => (
    <StyledButton type="button" onClick={firebase.doSignOut}>
        Sign Out
    </StyledButton>
);
export default withFirebase(SignOutButton);
