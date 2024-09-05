import React from 'react'
import prologis from '/assests/prologis.png'
import tower from '/assests/tower.png'
import equinix from '/assests/equinix.png'
import realty from '/assests/realty.png'
import './Companies.css'
const Companies = () => {
  return (
    <>
    <section className="c-wrapper">
<div className="paddings innerwidth flexCenter c-container">
<img src= {prologis} alt="" />
<img src= {tower} alt="" />
<img src= {equinix} alt="" />
<img src= {realty} alt="" />
</div>
    </section>
    </>
  )
}

export default Companies;