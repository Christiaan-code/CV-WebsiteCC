import React from 'react';
import '../App.css';
import './HeroSection.css';
import "./Scroll.css"

function HeroSection() {
    return (
        <div className ="hero-container">
            <video src="/videos/qwer.mp4" autoPlay loop muted/>
            <h1>JUNIOR DEVELOPER</h1>
            <p>Here is what I have to offer</p>
            {/* <div className="weather-temp">
                <Forecast/>
            </div> */}
            <div className="hero-btns">
                <div id="scroll-down">
                    <span className="arrow-down"></span>
                    <span id="scroll-title">
                        Scroll down
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HeroSection
