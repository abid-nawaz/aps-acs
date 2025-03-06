import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function News() {
  return (
    <div>
      <Navbar/>
      <div className="events">
<h1>NEWS AND EVENTS</h1>
<div class="ticker-wrap">
  <div class="ticker-move">
    <div class="ticker-item"> <h3>- Breaking : </h3> APS School wins Inter-School Quiz Competition.</div>
    <div class="ticker-item"><h3>- Upcoming Event: </h3>Annual Sports Day on March 15th</div>
    <div class="ticker-item"><h3> Important Announcement: </h3>Registration for Summer Camps now open</div>
    <div class="ticker-item"><h3> Important Announcement: </h3>Registration for Summer Camps now open</div>
    <div class="ticker-item"><h3> - Achievement: </h3>APS School student wins National Science Fair</div>
    <div class="ticker-item"><h3> - Event Reminder: </h3> Parent-Teacher Meeting on March 20th</div>
    
  </div>

</div>
<div className="m">
    
<h3>here we have multiple updates</h3>
    </div>

      </div>
      <Footer/>
    </div>
  )
}
