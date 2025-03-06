import React from 'react'

import Navbar from './Navbar'

import Footer from './Footer'
export default function Campus() {
  return (
    <div>
      <Navbar/>
      <div className="cmp">
        <h1>APSACS Campuses throughtout Pakitan</h1>
        <h2>Details</h2>
        <p>The Army Public Schools & Colleges (APSACS) system in Pakistan has campuses in many cities, including Rawalpindi, Lahore, Karachi, Peshawar, and more. 
APSACS campuses by region <br />
Rawalpindi: Has multiple regions, including Rawalpindi I, II, III, IV, V, and VI <br />
Lahore: Has a region with 15 schools <br />
Karachi: Has a region with 19 schools <br />
Peshawar: Has a region with 19 schools <br />
Quetta: Has a region with 14 schools <br />
Gujranwala: Has a region with 15 schools <br />
Bahawalpur: Has a region with 10 schools <br />
Mangla: Has a region with 5 schools <br />
Multan: Has a region with 7 schools <br />
Abbottabad: Has a region with 3 schools <br />
Some APSACS campuses <br />
APS South, North, Gulmohar, and APDC Malir: Campuses in Malir Cantt <br /> 
APS&C Boys Multan: Serves grades VI–XII and O Level  <br />
APS Junior Multan: Serves grades PG–V  <br />
APS&C Girls Multan: Serves grades VI–XII and O Level <br />
APS Humayun Road: A school and college that offers a wide range of extracurricular activities <br /> 
Abbottabad Public School: Located at an altitude of about 4,500 feet <br />
Army Public College, Chinar Campus Murree: A college located in Murree <br />
The APSACS system is a nationwide network of schools for children aged between 3 to 18 years</p>
      </div>
      <Footer/>
    </div>
  )
}
