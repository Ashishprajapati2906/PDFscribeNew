import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const dropdownOptions = [
        "How did you find us?",
        "Friend",
        "Advertisement",
        "Online",
        "Other"
    ];

    return (
        <div className="contact-container">
            <h4>#CONTACT US</h4>
            <h1>Get in Touch</h1>
            <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                molestie vel, ornare non id blandit netus.
            </p>
            <form className="contact-form">

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                />


                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />


                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    required
                />


                <select
                    id="dropdown"
                    onChange={handleOptionSelect}
                    value={selectedOption}
                    required
                >
                    {dropdownOptions.map((option, index) => (
                        <option key={index} value={option} disabled={index === -1}>
                            {option}
                        </option>
                    ))}
                </select>

                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default Contact;
