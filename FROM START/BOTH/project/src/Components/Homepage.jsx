import React from 'react'
import Navbar from './Navbar';
import img1 from './images/APSAC KOHAT.webp.jpg'
import Footer from './Footer';
import { Link, useViewTransitionState } from 'react-router-dom';
import img3 from '../Components/images/main.jpeg'
import { useState } from 'react';

export default function Homepage() {
  
  return (
    <div>
      <Navbar/>
      

      <div className="main">

      <a href=""><img src={img1} alt="" /></a>

<div className="intro">
<h1>WELCOME</h1>

<Link to={'http://localhost:3000/Home'} ><a href="http://localhost:3000/Home"><button> Learn more ➡️</button></a></Link>

</div>
<div className="nn">
<p>"Welcome to Army Public School (APS), a premier educational institution in Pakistan. <br /> Our mission is to provide quality education, fostering academic excellence, and developing  <br /> well-rounded individuals who can make a positive impact in society."
</p>
</div>


<hr />
<div className="def">

<img src={img3} alt="" />
  <div className="ine">
 <p> The Army Public School & College (APS) in Kohat, Pakistan was originally established in 1980 as Iqra Garrison School. It was later renamed  APS Kohat and upgraded to different levels <br /> over the years.  <br />
 <h2> History </h2><br />
In February 1980, the school was established as Iqra Garrison School with 80 students and 5 teachers <br />
It was later moved to its current location and building <br />
In 1993, it was upgraded to Middle level <br />
In 1997, it was upgraded to SSC level <br />
In 1999, it was upgraded to HSSC level <br />

 <h2> Purpose </h2><br />
The APS was established by the Pakistan Army to provide quality education to the children of Pakistan Army personnel and civilians. <br /> The school offers a safe, supportive, and disciplined <br /> learning environment. 
<br />  <h2>Features </h2><br />
The school has labs that are comparable to American suburban schools <br /> 
Students can choose to take the O Levels examination system, a British qualification, or a local qualification <br />
The school provides strong academic foundations and holistic development opportunities <br />
<h2>Goal </h2> <br />
The school's goal is to empower students to contribute to nation building and succeed in a global and technologically advanced world. 
</p>

  </div>

</div>
<hr />
<Footer/>
      </div>

   
     
    </div>
   
  )
}
