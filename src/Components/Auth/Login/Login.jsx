import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    
    if(!email || !password ){
        alert("please fill both fields ");
    }
    
    try {
        const config={
            headers:{"Content-type":"application/json"},
        }
        const {data} = await axios.post("/api/user/login",{email,password},config);
        alert("Logged in");
        localStorage.setItem('userInfo',JSON.stringify(data));
 
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
       
    } catch (error) {
        console.log("error occured");
    }
    
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleUsernameChange}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
