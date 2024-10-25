import React from 'react';
import './Navbar.css';
import logo from "../../../Assets/Navbar/logo.png";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="main">
            <div className="nav1">
                <img src={logo} alt="PDFSCRIBE Logo" />
                <span>PDFSCRIBE</span>
            </div>
            <nav className="nav2">
                <ul className='nav2-child'>
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#features">Features</Link></li>
                    <li><Link to="#testimonials">Testimonials</Link></li>
                    <li><Link to="#about">About Us</Link></li>
                </ul>
            </nav>
            <div className="nav3">
                <button className="get-started">Get Started</button>
            </div>

        </header>
    );
};

export default Header;
