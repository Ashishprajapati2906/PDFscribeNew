import React, { useState } from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="pricing-container">
            <h4>#PRICING</h4>
            <h1 className="pricing-header">Plans and Pricing</h1>
            <span>Choose the best plan for your business</span>
            <div className="toggle-container">
                <span>Monthly</span>
                <label className="switch">
                    <input type="checkbox" onChange={() => setIsYearly(!isYearly)} />
                    <span className="slider round"></span>
                </label>
                <span>Yearly</span>
            </div>
            <div className="pricing-plan-container">
                <div className="pricing-plan">
                    <h2>Enterprise</h2>
                    <h1>$0<span> {isYearly ? 'Year' : 'Month'}</span></h1>
                    <p>Flexible pricing without monthly fees and a <br /> 5% fee per transaction.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faXmarkSquare} /> 5% fee per transaction</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Unlimited pages</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Unlimited payments</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Email notifications</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Weekly reports</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Customization options</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> No whitelabel branding</li>
                    </ul>
                    <button className="choose-plan-btn1">Choose Plan</button>
                </div>
                <div className="pricing-plan">
                    <h2>Premium Plan</h2>
                    <h1>$60 <span>{isYearly ? '/ Year' : '/ Month'}</span></h1>
                    <p>Monthly pricing that automatically adjusts <br /> based on your transaction volume.</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> No transaction fees</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Unlimited pages</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Unlimited payments</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Email notifications</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Weekly reports</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> Customization options</li>
                        <li><FontAwesomeIcon icon={faCheckSquare} /> No whitelabel branding</li>
                    </ul>
                    <button className="choose-plan-btn2">Choose Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
