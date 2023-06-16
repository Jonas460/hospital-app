import React, { useState, useEffect } from "react";
import "./SignUpForm.css";
import Logo from "./../../assets/Logo.svg";
import { formatCPF, formatPhoneNumber } from "../../utils/masks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../LoginForm/redux/authActions";
import { updateUserLogin } from "../LoginForm/redux/authActions";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [crm, setCrm] = useState(0);
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [roleBack, setRoleBack] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCRM, setShowCRM] = useState(false);
  const [cellPhone, setCellPhone] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const message = useSelector((state) => state.user?.message);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createUser(
        name,
        email,
        password,
        roleBack,
        parseInt(crm),
        parseInt(cpf),
        parseInt(cellPhone)
      )
    );
    setIsLoading(true);
  };
  const removeNonNumericChars = (value) => {
    return value.replace(/\D/g, "");
  };

  const handleRoleChange = (e) => {
    setRoleBack(e.target.value === "doctor" ? 0 : 1);
    setRole(e.target.value);
    setShowCRM(e.target.value === "doctor");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    removeNonNumericChars(cpf);
    removeNonNumericChars(cellPhone);
    if (message === "Usuário cadastrado com sucesso.") {
      navigate("/");
      setIsLoading(false);
      dispatch(updateUserLogin());
    }
  }, [message]);

  useEffect(() => {
    if (email && password && role && confirmPassword) {
      if (role === "médico" && !crm) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
      if (password !== confirmPassword) {
        setFormValid(false);
      } else {
        setFormValid(true);
      }
    } else {
      setFormValid(false);
    }
  }, [email, password, role, confirmPassword, crm]);

  useEffect(() => {
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não correspondem");
      return;
    }
    setErrorMessage("");
  }, [confirmPassword, password]);

  return (
    <div className="container">
      <div className="login-content">
        <img src={Logo} alt="Logo" className="login-image" />
        <h1 className="login-text">HospitalApp</h1>
      </div>

      <h2 className="container-title">Cadastro</h2>

      <form>
        <label>CPF:</label>
        <input
          type="text"
          placeholder="CPF"
          maxLength={11}
          value={formatCPF(cpf)}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Telefone: </label>
        <input
          type="text"
          maxLength={11}
          placeholder="(99) 9 9999-9999"
          value={formatPhoneNumber(cellPhone)}
          onChange={(e) => {
            setCellPhone(e.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="exemplo@exemplo.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label className="error-message">{errorMessage}</label>
        <label>Confirmar senha:</label>
        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <label>Função:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="">Selecione uma função</option>
          <option value="patient">Paciente</option>
          <option value="doctor">Médico</option>
        </select>

        {showCRM && (
          <>
            <label>CRM:</label>
            <input
              type="text"
              value={crm}
              onChange={(e) => {
                setCrm(e.target.value);
              }}
            />
          </>
        )}
        <div className="button-wrapper">
          <button type="button" className="back-button" onClick={handleGoBack}>
            Voltar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!formValid}
            className={!formValid ? "disabled-button" : ""}
          >
            Cadastrar
          </button>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default SignUpForm;
