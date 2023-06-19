import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../features/LoginForm/redux/authActions";
import "./Popup.css";

const Popup = ({ record, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(record.name);
  const [userId] = useState(record.id);
  const [email, setEmail] = useState(record.email);
  const [password, setPassword] = useState(record.password);
  const [cellPhone, setCellPhone] = useState(record.cellPhone);

  const handleSave = () => {
    dispatch(editUser(name, email, password, cellPhone, userId));
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Editar Dados</h2>

        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Telefone:</label>
        <input
          type="tel"
          value={cellPhone}
          onChange={(e) => setCellPhone(e.target.value)}
        />

        <div className="button-wrapper">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button className="save-button" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
