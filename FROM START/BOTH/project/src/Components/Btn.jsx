import React, { useState } from 'react'
import Register from './Registeration';
export default function Btn() {
  const [showForm,setShowForm]=useState(false);
  const handleClick=()=>{
    setShowForm(true);
  };
    return (
    <div >
        <div className="btnuu">
            
    <button onClick={handleClick} style={{marginLeft:'70%',fontFamily:'sans-serif',fontSize:'19px',marginBottom:'10pxl'}}>Register</button> 

        </div> 
    {showForm && <Register/> }
    
    </div>
  );
}
