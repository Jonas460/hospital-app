import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../features/LoginForm/redux/authActions";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.user?.user);
  const [searchQuery, setSearchQuery] = useState("");
  const medicalRecords = useSelector(
    (state) => state.user?.user?.patients || []
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecords = medicalRecords.filter((record) =>
    record.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="patient-dashboard">
      <h2 className="dashboard-title">Dr {doctor.name} - Fichas Médicas</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="patient-container">
        {filteredRecords.map((record) => (
          <div key={record.id} className="patient-card">
            <h3>{record.name}</h3>
            <p>CPF: {record.cpf}</p>
            <p>Telefone: {record.phone}</p>
            <p>Endereço: {record.address}</p>

            <button className="edit-button">Editar</button>
            <button
              className="delete-button"
              onClick={() => handleDelete(record.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
