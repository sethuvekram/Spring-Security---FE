import React, { useState } from "react";
import axios from "axios";
import './Login.scss';
import { Link, useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const values= {

    email: email,
    password: password
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(values);
    try {
      const response = await axios.post('http://localhost:8080/User/login', { email, password });
    const { user, token, role } = response.data;
    localStorage.setItem('token',token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    
    if ( response.status === 200) {

        alert("Login Successful")
        navigate("/home");
      } 
    } catch (error) {
      console.error("Error:", error);
      // alert("Login Failure");  
    }
  };

  return (
    <div className="login">    <div className="login-container">
      <form className="form">
        <h2>SIGN IN</h2>
        <label className ="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"   onClick={handleSubmit}>Submit</button><br/>
        <p>Don't Have an Account?</p>
        <Link to="/register">
          Register
          </Link>
      </form>
    </div>
    </div>

  );
};

export default Login;