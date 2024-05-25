import "./PricingCardStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic Model -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 1000</p>
                    <p>- Basic Webpage Design -</p>
                    <p>- Basic JS Operations -</p>
                    <p>- Information Based -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
                <div className="card">
                    <h3>- eShop Model -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 5000</p>
                    <p>- UI/UX Design -</p>
                    <p>- Cart System -</p>
                    <p>- Authenticate User Data -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
                <div className="card">
                    <h3>- Social Model -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 8000</p>
                    <p>- High-End Servers -</p>
                    <p>- Front-End & Server-Side Development-</p>
                    <p>- Full Stack w/ Firebase -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default PricingCard;
