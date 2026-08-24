import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("student");
  const [credentials, setCredentials] = useState({ userId: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role}...`);
  };

  return (
    <div className="login-page">
      <div className="login-hero">
        <div className="login-container">
          <div className="login-breadcrumb">
            <Link to="/">Home</Link> / <span>Portal Login</span>
          </div>
          <h1>Institute Portal Login</h1>
        </div>
      </div>

      <div className="login-container">
        <div className="login-box">
          <div className="login-icon-wrap">
            <FaUserLock />
          </div>
          <div className="login-header">
            <h2>Authorized Portal</h2>
            <p>Access your attendance, results & notes</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="login-field">
              <label>Select User Role</label>
              <select 
                className="login-input" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student Portal</option>
                <option value="faculty">Faculty / Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <div className="login-field">
              <label>Registration No / Username</label>
              <input
                type="text"
                required
                className="login-input"
                placeholder="Enter your ID"
                value={credentials.userId}
                onChange={(e) => setCredentials({ ...credentials, userId: e.target.value })}
              />
            </div>

            <div className="login-field">
              <label>Password</label>
              <input
                type="password"
                required
                className="login-input"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;