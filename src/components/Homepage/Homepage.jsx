import React from 'react';
import './Homepage.css';
import DrawerToggleButton from '../Navigation/SideDrawer/DrawerToggleButton';
import MenuIcon from "./hamburger-menu.svg";
import ChefsImg from "./chefs.svg";
import Food from "./food_pic.svg";

class Homepage extends React.Component {
    render(){
        return(
            <div className="home-container">
                <div className='main-content-mobile'>
                    <div className='ban-content-container'>
                        <div className='main-cont-banner'>
                            <p className='banner-txt'>All Real Food. Affordable.</p>
                        </div>
                        <div className='white-banner-1'>
                             <p className='banner-txt'>CAREFULLY PREPARED MEALS HAND-CRAFTED  AT DELICIOUSLY AFFORDABLE PRICES.</p>
                        </div>
                        <img src={ChefsImg} id='chef-img' ></img>
                        <div className='quote-banner'>
                            <p className='mission-txt'>My mission is to prepare my fellow peers a variety of meals that they can enjoy at an affordable price. </p>
                        </div>
                        <div className='white-banner-2'>
                            <p className='quote-txt'>“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”
                                - Ruth Reichl
                            </p>
                        </div>
                        <div className='order-now-prompt'>
                            <p className='banner-txt'>Grab a plate.<br />Order Online.</p>
                            <button id='order-now-btn'>
                                Order Now
                            </button>
                            <br/><br/>
                            <hr></hr>
                            <p id='footer-txt'>© 2020 Joziah Mays All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className='main-content-web'>
                    <div className='ban-content-container'>
                        <div className='first-img-section'>
                            <div className='transparent-white'>
                                <p id='transparent-white-blk1'>All Real Food. Affordable.</p>
                                <p id='transparent-white-blk2'>CAREFULLY PREPARED MEALS HAND-CRAFTED  AT DELICIOUSLY AFFORDABLE PRICES.</p>
                            </div>
                        </div>
                        <div className='second-img-section'>
                            <div className='transparent-bkgnd' id='orange'>
                                <p className='transparent-bkgnd-txt' id='blk1'>
                                    My mission is to prepare my fellow peers a variety of meals that they can enjoy at an affordable price.
                                </p>
                            </div>
                            <div className='transparent-bkgnd' id='blue'>
                                <p className='transparent-bkgnd-txt' id='blk2'> “Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”
                                    - Ruth Reichl
                                </p>
                            </div>
                        </div>
                        <div className='order-now-prompt'>
                            <p className='banner-txt'>Grab a plate. Order Online.</p>
                            <p><u><strong> Hours of Operation </strong></u>:<br />
                                Mon-Fri - 4pm ~ 7pm <br />
                                Saturday - 12:30pm ~ 3:30pm<br />
                            </p>
                            <button id='order-now-btn'>
                                Order Now
                            </button>
                            <br/><br/>
                            <hr></hr>
                            <p id='footer-txt'>© 2020 Joziah Mays All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;