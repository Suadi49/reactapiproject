import React, { useState } from 'react';
import icon1 from "../../../assets/Icon.svg";
import logo from "../../../assets/Nexcent.svg";
import menubtn from "../../../assets/menu-btn.png";
import './navbar.scss'
import { Link } from 'react-router-dom'; 


function Navbar(){
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }        
 
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={icon1} alt="" />
                    <img src={logo} alt="" />
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'open-menu' : ''}`}>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/Service">Service</Link></li>
                    <li><Link to="/Feature">Feature</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="/Testimonial">Testimonial</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                </ul>
                <div className="buttons">
                    <Link to="Login" className="button-text-green">Login</Link>
                    <Link to="SignUp" className="button-green">Sign up</Link>
                </div>
                <img src={menubtn} alt="" className="menu-btn" onClick={handleMenuClick} />
            </div>
        </nav>
    ); 
}

export default Navbar;