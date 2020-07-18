import React, { Component } from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from './oogie_logo.svg';

const toolbar = (props) => (
  <div className="toolbar">
    <nav className="toolbar__nav">
      <div className="toolbar__logo">
        <img src={Logo} alt='company logo' id='toolbar__logo'></img>
        <div id='logo-active'>Oogie's</div>
      </div>
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="spacer" />
      <div className="toolbar_nav-items">
        <ul>
          <li><a href="#" className="nav-list-item">Home</a></li>
          <li><a href="#" className="nav-list-item">About Us</a></li>
          <li><a href="#" className="nav-list-item">Menu</a></li>
          <li><a href="#" className="nav-list-item">Place Order</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default toolbar;
