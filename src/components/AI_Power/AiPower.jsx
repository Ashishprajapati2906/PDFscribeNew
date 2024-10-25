import React from 'react'
import './AiPower.css'
import upload from '../../Assets/upload/Upload.png'


const AiPower = () => {
    return (
        <div className="container">
            <header>
                <h4>#AI-Powered Precision</h4>
                <h1>Transform Your Documents with <br />AI-Powered Precision</h1>
                <p>Seamless, Accurate, and Fast Translations at Your Fingertips</p>
            </header>
            <div className='upload'>
                <div className="upload-section" >

                    <img src={upload} alt="Upload Illustration" className="upload-img" />
                    <p>Select Or Drop A File</p>
                    <p className='myP'>File Upto 25 MB</p>

                </div>

                <div className="controls">
                    <div className="language-selector">

                        <select className="language-dropdown">
                            <option>Choose Language</option>
                            <option value="none"></option>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            {/* Add more languages as needed */}
                        </select>
                    </div>
                    <button className="translate-button">Translate</button>
                </div>

            </div>
            <hr />
        </div>

    );
};

export default AiPower;


