import React, { useState } from "react";
import "./LogIn.css";
import Input from "@mui/joy/Input";
import { styled } from "@mui/system";
import KeySVG from "components/../../public/svg/key.svg";
import UserSVG from "components/../../public/svg/user.svg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Logging in with:", username, password);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-form-heading">Account login</h2>
        <Input
          value={username}
          onChange={handleUsernameChange}
          className="login-form-username-input"
          placeholder=" Username or e-mail address"
          color="neutral"
          variant="soft"
          startDecorator={
            <img
              className="login-form-username-input-decorator"
              src={UserSVG}
              alt=""
              style={{ width: "22px", height: "22px" }}
            />
          }
          sx={{
            "--Input-focusedThickness": "0",
            width: 500,
            height: 40,
            "&:focus-within .login-form-username-input-decorator": {
              opacity: 1,
            },
          }}
        />

        <Input
          value={password}
          onChange={handlePasswordChange}
          className="login-form-password-input"
          placeholder=" Password"
          type="password"
          color="neutral"
          variant="soft"
          startDecorator={
            <img
              className="login-form-username-input-decorator"
              src={KeySVG}
              alt=""
              style={{ width: "22px", height: "22px" }}
            />
          }
          sx={{
            "--Input-focusedThickness": "0",
            width: 500,
            height: 40,
            "&:focus-within .login-form-username-input-decorator": {
              opacity: 1,
            },
          }}
        />

        <button className="login-form-login-button" onClick={handleLogin}>
          Login
        </button>

        <div className="login-form-button-section">
          <button className="login-form-reset-button">
            Forgot your password?
          </button>
          <button className="login-form-register-button">Register</button>
        </div>

        <p class="login-form-info">
          Please login with your Konexio user account. You will be asked to
          authorize the application to access your user account after logging
          in.
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
