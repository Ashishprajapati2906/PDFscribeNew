import React from 'react';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from "../../Assets/Navbar/logo.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Product</h4>
                <ul>
                    <li>Employee database</li>
                    <li>Payroll</li>
                    <li>Absences</li>
                    <li>Time tracking</li>
                    <li>Shift planner</li>
                    <li>Recruiting</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Information</h4>
                <ul>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="footer-section subscribe">
                <h4>Subscribe</h4>
                <div className='row'>
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Submit</button>
                </div>
                <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            </div>
            <hr className="divider" />
            <div className="footer-bottom">
                <div className='logo'>
                    <img src={logo} alt="PDFSCRIBE Logo" />
                    <span>PDFSCRIBE</span>
                </div>
                <div className='conditions'>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Cookies</span>
                </div>
                <div className="social-icons">
                    <FaLinkedin />
                    <FaFacebook />
                    <FaTwitter />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
