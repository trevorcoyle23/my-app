import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";

import React from 'react';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who are WE?</h1>
                <p>WE are a small freelancer company based in San Antonio, Texas dedicated to helping businesses, big or small, reach a larger number of people through their own personal website.</p>
                <p>WE have a very motivated team ready to assist and serve in every way possible.</p>
                <p>WE develop everything ourselves using frameworks such as Node.JS and React as well as a complete setup of your deployment online using back-ends such as Firebase and Google Cloud.</p>
                <p>EST. 2024</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutContent;
