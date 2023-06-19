import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../features/LoginForm/redux/authActions";
import Popup from "../../Components/PopUp/PopUp";
import "./PatientDashboard.css";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { useEffect } from "react";

const PatientDashboard = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const doctor = useSelector((state) => state.user?.user);
  const message = useSelector((state) => state.user?.message);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
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

  const handleEdit = (record) => {
    setSelectedRecord(record);
  };

  useEffect(() => {
    if (message === "Dados salvos com sucesso!") {
      alert("Dados salvos com sucesso!");
      setIsLoading(false);
      setSelectedRecord(null);
    } else {
      alert("Erro ao salvar");

      setSelectedRecord(null);
    }
  }, [dispatch]);

  const handleClosePopup = () => {
    setIsLoading(true);
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
            <p>Telefone: {record.cellPhone}</p>
            <p>Email: {record.email}</p>

            <button className="edit-button" onClick={() => handleEdit(record)}>
              Editar
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(record.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

      {selectedRecord && (
        <Popup record={selectedRecord} onClose={handleClosePopup} />
      )}

      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default PatientDashboard;
