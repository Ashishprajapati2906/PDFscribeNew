import React, { useState } from 'react';
import './Fnq.css';
import { GoArrowUp, GoArrowDown } from "react-icons/go";

const Fnq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        { question: "What is UX design?", answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user." },
        { question: "What are the key principles of UX design?", answer: "Key principles include user-centered design, consistency, usability, and accessibility." },
        { question: "What is the difference between UX and UI design?", answer: "UX design focuses on the overall experience of the user, while UI design focuses on the visual and interactive elements of a product." },
        { question: "What is a wireframe?", answer: "A wireframe is a basic visual guide used in interface design to suggest the structure of an application or website." },
        { question: "What is user testing?", answer: "User testing involves evaluating a product by testing it with real users to improve its usability and user experience." }
    ];

    return (
        <div className="faq-container">
            <h4>#F&Q</h4>
            <h1>Frequently Asked Questions</h1>
            {faqItems.map((item, index) => (
                <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
                    <div className="faq-question">
                        {item.question}
                        <span className="faq-arrow">{activeIndex === index ? <GoArrowUp style={{ border: '1px solid #008080', borderRadius: '50%' }} size="30px" /> : <GoArrowDown style={{ border: '1px solid #008080', borderRadius: '50%' }} size="30px" />}</span>
                    </div>
                    {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default Fnq;
