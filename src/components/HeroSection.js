import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>WATCH TOGETHER</h1>
            <p>START WATCHING NOW</p>
            <div className= "hero.btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED NOW</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH<i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
