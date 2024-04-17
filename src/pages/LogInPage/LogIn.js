import React, { useState } from "react";
import "./LogIn.css";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Account login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username or e-mail address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="form-footer">
          <button type="button" className="link-button">
            Forgot your password?
          </button>
          <button type="button" className="link-button">
            Register
          </button>
        </div>
        <div className="social-logins">
          {/* Icons or text links for social media logins go here */}
          <span>G+</span>
          <span>fb</span>
          <span>twitch</span>
          <span>steam</span>
          <span>xbox</span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
