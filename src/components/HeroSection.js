import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className ="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>JUNIOR DEVELOPER</h1>
            <p>Here is what I have to offer</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle= 'btn--outline'
                    buttonSize='btn--large'>Get Started
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
