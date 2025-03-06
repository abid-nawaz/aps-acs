import React from 'react'

export default function Register() {
  
  const handlesubmit=(event)=>{
    
      
    alert("You have been successfully registered");
    window.location.reload();
    
  }
  return (
    <div>
    <div className="reg-form">
        <h2>Register</h2>
<form action="http://localhost:4000/register" method='post' encType='multipart/form-data'>
<label htmlFor="">Name</label>
<input type="text" name='name' />
<br />

<label htmlFor="">Email</label>
<input type="email"  name='email'/>
<br />
<label htmlFor="">Password</label>
<input type="password" name='password' />
<br />
<label htmlFor="">File</label>
<input type="file" name="profileimage" id="" />
<br />
<button type="submit" onClick={handlesubmit}>  Register</button>

</form>
    </div>
      
    </div>
  )
}
