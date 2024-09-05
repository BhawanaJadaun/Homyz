import React from 'react'
import "./Footer.css"
import logo2 from "../../.././public/assests/logo2.png"
const Footer = () => {
  return (
<section className="f-wapper">
<div className="padding innerWidth flexCenter f-container">
{/* Left Side */}
<div className="flexColStart f-left">
<img src= {logo2} alt="" width={120} />
<span className = "secondaryText">
Our vision is to make all people <br/>
the best place to live for them.
</span>
</div>
<div className="flexColStart f-right">
<span className="primaryText">Information</span>
<span className = "secondaryText">145 New york,FL 4571,USA</span>
<div className="flexCenter f-menu">
<span>Property</span>
<span>Services</span>
<span>Product</span>
<span>About Us</span>
</div>
</div>
</div>
</section>
  )
}

export default Footer