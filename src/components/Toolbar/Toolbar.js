import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">LOGO</a></div>
        
        <div className="toolbar_pages">
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Food</a></li>
                <li><a href="/">Exercise</a></li>
                <li><a href="/">Community</a></li>
            </ul>
        </div>
        
        
        
        <div className="toolbar_navigation_items">
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/">Sign up</a></li>
            </ul>
        </div>
    
  </header>
);

export default toolbar;