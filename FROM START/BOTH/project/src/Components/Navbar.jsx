import React from 'react'
import img1 from './images/APS-Army-Public-School-CDR-logo-Free-removebg-preview.png'
import {Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div className="two">
        <h2>ΔPS&CS </h2>
<div className="navbar">
 <nav>


  <ul>
    <li><Link to={'/Home'}>Home</Link></li>
    <li><Link to={'/About'}>About us</Link></li>
    <li><Link to={'/Academics'}>Academics</Link></li>
    <li><Link to={'/Faculties'}>Faculties</Link></li>
    <li><Link to={'/Campus'}>Campuses</Link></li>
    <li><Link to={'/News'}>News and Events</Link></li>
    <li><Link to={'/Gallery'}>Gallery</Link></li>
    <li><Link to={'/Contact'}>Contact Us</Link></li>
  </ul>
 </nav>
</div>
</div>
    </div>
  )
}
