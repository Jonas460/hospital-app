import React, { useState } from "react";

const MedicalRecordForm = () => {
  const [photo, setPhoto] = useState(null);
  const [fullName, setFullName] = useState("");
  const [cpf, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      <input
        type="text"
        placeholder="Nome Completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCPF(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default MedicalRecordForm;
