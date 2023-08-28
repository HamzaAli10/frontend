import React, { useState } from 'react';
import './Sign.css';
import axios from 'axios';


const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(!name || !email || !password ){
        alert("please fill all fields ");
    }
    
    try {
        const config={
            headers:{"Content-type":"application/json"},
        }
        const {data} = await axios.post("/api/user",{name,email,password});
        alert("registered");
        localStorage.setItem('userInfo',JSON.stringify(data));
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
       
    } catch (error) {
        console.log("error occured");
    }

  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" >Sign Up</button>
      </form>
    </div>
  );
};

export default Sign;
