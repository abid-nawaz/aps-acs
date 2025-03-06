import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div> 
            <footer>

            <div className="footer">
<div className="info">
    <h3>Get in Touch</h3>
    <div className="f">
    <ul><li>School address  :<a href="https://www.google.com/maps/place/Army+Public+School/@33.5929567,71.4335015,747m/data=!3m1!1e3!4m6!3m5!1s0x38d8ef14cf4e9513:0x94ef8a1d9d1c3bd8!8m2!3d33.5934332!4d71.4496021!16s%2Fg%2F1tczhvt6?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">🗺️</a></li></ul>
    <ul><li>Phone numbers:🤙0922511900</li></ul>
    
    </div>
</div>
<div className="Links">
    <h3>Quick Links</h3>
    <ul>
      <li><Link to={'http://localhost:3000/Admissions'}><a href="http://localhost:3000/Admissions"></a>Admissions</Link></li>
      <li><Link to={'http://localhost:3000/Academics'}><a href="http://localhost:3000/Academics">Academics</a></Link></li>
      <li><Link to={'http://localhost:3000/Faculties'}><a href="http://localhost:3000/Faculties">Faculties</a></Link></li>
      <li><Link to={'http://localhost:3000/Campuse'}><a href="http://localhost:3000/Campuse"></a>Campus</Link></li>
      <li><Link to={'http://localhost:3000/Gallery'}><a href="http://localhost:3000/Gallery"></a>Gallery</Link></li>
      <li><Link to={'http://localhost:3000/Faqs'}><a href="http://localhost:3000/Faqs">Faqs</a></Link></li>
      </ul>
</div>
<div className="About">
    <h3>About APS</h3>
    <p>The Army Public School & College (APS) in Kohat, <br />Pakistan was originally established in 1980 as Iqra Garrison School. It was later renamed APS Kohat and upgraded to different levels
    over the years</p>
</div>

</div>
<div className="c">
<p style={{backgroundColor:'black',margin:'0',color:'white'}}>&copy;  2025 Army Public School kohat cantt.All rights reserved</p>
</div>


            </footer>
            
      
    </div>
  )
}
