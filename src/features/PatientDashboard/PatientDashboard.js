import React, { useEffect, useState } from "react";

const PatientDashboard = () => {
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    // Implemente a lógica para buscar as fichas médicas do paciente no backend
    // Atualize o estado 'medicalRecords' com as fichas obtidas
    const fetchMedicalRecords = async () => {
      try {
        // Faça uma requisição para o backend e obtenha as fichas médicas do paciente
        const response = await fetch("/api/medical-records");
        const data = await response.json();
        setMedicalRecords(data);
      } catch (error) {
        console.error("Erro ao buscar as fichas médicas:", error);
      }
    };

    fetchMedicalRecords();
  }, []);

  return (
    <div>
      <h2>Minhas Fichas Médicas</h2>
      {medicalRecords.map((record) => (
        <div key={record.id}>
          <h3>{record.fullName}</h3>
          <p>CPF: {record.cpf}</p>
          <p>Telefone: {record.phone}</p>
          <p>Endereço: {record.address}</p>
          {/* Adicione aqui os outros campos da ficha médica */}
        </div>
      ))}
    </div>
  );
};

export default PatientDashboard;
