import React from 'react'

import Navbar from './Navbar'
import img50 from './images/WhatsApp Image 2025-03-03 at 10.38.33_3098141a.jpg'
import img60 from './images/WhatsApp Image 2025-03-03 at 10.38.29_d23f699d.jpg'
import img70 from './images/WhatsApp Image 2025-03-03 at 10.38.23_e717e125.jpg'
import img80 from './images/WhatsApp Image 2025-03-03 at 10.38.09_82b45183.jpg'
import img45 from './images/download (1).jpeg'
import img55 from './images/download (2).jpeg'
import img65 from './images/images (2).jpeg'
import img75 from './images/images (3).jpeg'
import img85 from './images/images (4).jpeg'
import Footer from './Footer'
export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <div className="gallery">
        <div className="h1">
          <h1>"APS Kohat in Pictures"</h1>
        </div>
        <div className="aik">
            
              <div className="andr">
                
            <h2>Ramadan Moments</h2>
                <img src={img50} alt="" />
                <img src={img60} alt="" />
                <img src={img70} alt="" />
                <img src={img80} alt="" />
  
              </div>
              <div className="doo">
             <h2> APS's Ramadan celebration:</h2> <br />


"This Ramadan, Army Public School (APS) is thrilled to celebrate the holy month with our students, staff, and community. We invite you to join us in our Ramadan Moments, a series of spiritual and festive events that will take place throughout the month. Our school timings during Ramadan will be adjusted to accommodate Taraweeh prayers and Iftar gatherings. Please note that our school will operate from [From Mon-Thursday 8:30am-1:05pm,Friday: 8:30am-12:35pm ] during this blessed month. We'll also be sharing inspiring recitation pictures and quotes to help you reflect on the true spirit of Ramadan. Let's come together to make this Ramadan a memorable and enriching experience for all!"
              </div>
            </div>
            <div className="vd">
            </div>
       
      </div>
      <div className="hs">
<img src={img45} alt="" />
<img src={img55} alt="" />
<img src={img65} alt="" />
<img src={img75} alt="" />
<img src={img85} alt="" />
     
      </div>
      <Footer/>
    </div>
  )
}
