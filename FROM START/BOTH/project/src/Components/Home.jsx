import React from 'react'

import Navbar from './Navbar'
import img6 from './images/APS-Army-Public-School-CDR-logo-Free-removebg-preview.png'
import Footer from './Footer'
import Btn from './Btn'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="hm">
        <img src={img6} alt="" />
      <h1><hr />Home : Army Public School & College System <hr /></h1>
      
    </div>
    <div className="ba">
    <button>APSACS Kohat</button>
    </div>
    <div className="p">
      <p><h1>Principal’s Note</h1> <br />
Army Public School & College Kohat is constantly endeavoring to impart value based quality education to the students. All our efforts are put in for better development of students to enable them to face challenges of today’s competitive world. We pledge to provide most congenial learning environment to the students with the view to prepare the future of our Nation & Country. <br />

Our focused attention, excellent teaching and able guidelines provide the students with required knowledge and skills and make them useful citizens. We offer our students a range of activities and opportunities designed to promote excellence, success, confidence and self-esteem. <br />

We take pride in the young people of APSAC KOHAT, who is ready to accept the challenges of life and learn resilience to disappointment. We consider it a privilege to teach the young citizens of the future. <br />


<h2>Principal,</h2> 
Mrs Shomaila Bokhari <br />
Army Public School and College Kohat</p>
<Btn/>
    </div>
   
         <Footer/>
    </div>
  )
}
