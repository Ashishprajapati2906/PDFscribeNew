import React from 'react';
import './BestFeature.css';

const BestFeature = () => {
    return (
        <div className="best-feature">
            <h4>#Best Features</h4>
            <h1>Why Choose Our Translator?</h1>
            <div className="features">
                <div className="feature-item">
                    <img src={Image} alt="Real-time Translation" className="feature-icon" />
                    <h3>Real-time Translation</h3>
                    <p>Experience instant translations as you upload or edit your documents. Our AI ensures you get the results you need without the wait.</p>
                </div>
                <hr />
                <div className="feature-item">
                    <img src={Image} alt="Multilingual OCR" className="feature-icon" />
                    <h3>Multilingual OCR</h3>
                    <p>Translate scanned documents and images within PDFs with our cutting-edge Optical Character Recognition technology.</p>
                </div>
                <hr />
                <div className="feature-item">
                    <img src={Image} alt="Contextual Accuracy" className="feature-icon" />
                    <h3>Contextual Accuracy</h3>
                    <p>Experience instant translations as you upload or edit your documents. Our AI ensures you get the results you need without the wait.</p>
                </div>
            </div>
            <hr className="divider" />
        </div>

    );
};

export default BestFeature;
