import React from 'react';
import './Testimonials.css';
import one from '../../Assets/Testimonials/1.jpeg';
import two from '../../Assets/Testimonials/2.jpeg';
import three from '../../Assets/Testimonials/3.jpeg';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h4>#TESTIMONIALS</h4>
            <h1>What our clients say about us.</h1>
            <div className="testimonial-items">
                <div className="testimonial-item">
                    <img src={one} alt="James Pattinson" className="testimonial-img" />
                    <h3>James Pattinson</h3>
                    <div className="stars">
                        <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span>
                    </div>
                    <p>"This translation service has truly changed the way I work. The accuracy and speed are unparalleled!"</p>
                </div>
                <div className="testimonial-item">
                    <img src={two} alt="Greg Stuart" className="testimonial-img" />
                    <h3>Greg Stuart</h3>
                    <div className="stars">
                        <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span>
                    </div>
                    <p>"A game-changer for my business. The multilingual OCR feature is incredible."</p>
                </div>
                <div className="testimonial-item">
                    <img src={three} alt="Trevor Mitchell" className="testimonial-img" />
                    <h3>Trevor Mitchell</h3>
                    <div className="stars">
                        <span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9733;</span><span className="star">&#9734;</span><span className="star">&#9734;</span>
                    </div>
                    <p>"I can now manage international documents with ease. Highly recommend this tool!"</p>
                </div>
            </div>
            <hr className="divider" />
        </div>
    );
};

export default Testimonials;
