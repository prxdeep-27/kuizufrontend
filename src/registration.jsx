import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Add this line
import { useNavigate } from 'react-router-dom';
// import { baseURL } from './urls';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3004/api/auth/register', {
      // const response=await axios.post(`${baseURL}/api/users`,{
        username,
        password,
      });

      setSuccessMessage(response.data.message);
      setUsername('');
      setPassword('');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (

    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br/>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </div>

  );
};

export default Register;
