import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Website4Sale.com"/>
            </div>
            <div className="content">
                <p>HI, WE ARE A FREELANCER COMPANY.</p>
                <h1>Website Designers.</h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    )
};

export default HeroImg;
