import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        <div>
                            <p>San Antonio, Texas</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />210-279-7721</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />business@website4sale.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Us</h4>
                    <p>Founder Trevor Coyle, Co-Founder Justin Alcaraz</p>
                    <div className="social">
                        <a href="https://github.com/trevorcoyle23" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />
                        </a>
                        <a href="https://x.com/DevTrevCS" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}} />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Footer;
