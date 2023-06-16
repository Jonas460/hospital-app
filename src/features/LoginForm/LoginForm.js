import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/authActions";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.user?.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
    setIsLoading(true);
  };

  useEffect(() => {
    if (!users || users.doctor.name) {
      setIsLoading(false);
      navigate("/dashboard");
    }
  }, [dispatch, users]);

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={Logo} alt="Logo" className="login-image" />
        <h1 className="login-text">HospitalApp</h1>
      </div>
      <div className="login-form">
        <form>
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
          <p className="error-mensage">
            {!users ? "Usuário ou senha incorretos" : ""}
          </p>
          <p>
            Não tem uma conta?{" "}
            <Link to="/signup" className="sing-up">
              Cadastre-se
            </Link>
          </p>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default LoginForm;
