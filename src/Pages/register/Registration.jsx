import React, { useState } from "react";

import "./registration.scss";
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const userDetails = {
    name,
    email,
    password,
    confirmPassword,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    
    const userDetails = {
      name,
      email,
      password,
      confirmPassword,
    };
    handleRegister(userDetails);
  
  };

  const handleRegister = async () => {
   
    try {
      const response = await axios.post(
        "http://localhost:8080/User/register",
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data);
      if (response.status === 200) {
        alert("Registered Successfully")
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="registration">    <div className="registration-container">
      <form className="form" >
        <h2>SIGN UP</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button  onClick={handleSubmit}>Submit</button>
         <p>Already Having Account?</p>
         <Link to = "/">
          Login
         </Link>
         
      </form>
    </div>
    </div>

  )
  }


export default Registration;
