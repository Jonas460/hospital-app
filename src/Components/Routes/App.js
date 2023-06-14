import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "../../features/SignUpForm/SignUpForm";
import PatientDashboard from "./../../features/PatientDashboard/PatientDashboard";
import LoginForm from "./../../features/LoginForm/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
