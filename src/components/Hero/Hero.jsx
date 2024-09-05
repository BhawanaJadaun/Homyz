import React from 'react'
import hero_img from "/assests/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
import './Hero.css';
const Hero = () => {
    return ( 
        <>
        <section className = "hero-wrapper" >
        
        <div className = "paddings innerwidth flexCenter hero-container " >
        
        <div className = "flexColStart hero-left" >
            <div className="orange-circle"/>
            <div className = 'hero-title'>
        <h1>Discover <br/>
        Most Suitable <br/>Property</h1>
            </div>
            <div className="flexColStart hero-desc">
                <span>find a Variety of properties that suit you very easily</span>
                <span>Forget all difficulties in finding a residence for you</span>
            </div>
            <div className="flexCenter search-bar">
                <HiLocationMarker color = "var(--blue)" size={25}/>
                <input type = "text"/>
                <div className="button">Search</div>
            </div>
            <div className="flexCenter stats">
                <div className="flexColStart stat">
                    <span>
                        <CountUp start = {8800} end = {9000} duration = {4} />
                        <span>+</span>
                    </span>
                    <span className = "secondaryText">Premium Products</span>
                </div>
                <div className="flexColStart stat">
                    <span>
                        <CountUp start = {1950} end = {2000} duration = {4} />
                        <span>+</span>
                    </span>
                    <span className = "secondaryText">Happy Customers</span>
                </div>
                <div className="flexColStart stat">
                    <span>
                        <CountUp  end = {25} />
                        <span>+</span>
                    </span>
                    <span className = "secondaryText">Award Winning</span>
                </div>
            </div>
        </div> 
        <div className = "flexCenter hero-right" >
        
        <div className = "image-container" >
    
        <img src = {hero_img} alt = "Hero" />
        
        </div> 
        </div>
         
        </div> 
        </section >
        </>
    );
}

export default Hero;