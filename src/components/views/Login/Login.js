import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
import logo1 from "../../../assets/logo1-1.png";

function Login() {
  return (
    <div className="login">
      <h1 className="title">Leaf</h1>
      <LoginForm />
      <div className="login-logo-container">
        <img src={logo1} alt="logo"/>
      </div>
      <p className="prompt-create-user">Create your account <a>here</a></p>
    </div>
  );
}

export default Login;
