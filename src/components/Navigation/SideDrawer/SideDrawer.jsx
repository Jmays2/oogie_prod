import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="#" className="nav-list-item">Home</a></li>
        <li><a href="#" className="nav-list-item">About Us</a></li>
        <li><a href="#" className="nav-list-item">Menu</a></li>
        <li><a href="#" className="nav-list-item">Place Order</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
