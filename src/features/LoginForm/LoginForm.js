import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={Logo} alt="Logo" className="login-image" />
        <h1 className="login-text">HospitalApp</h1>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Não tem uma conta?{" "}
            <Link to="/signup" className="sing-up">
              Cadastre-se
            </Link>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
