import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "../../features/SignUpForm/SignUpForm";
import PatientDashboard from "../../features/PatientDashboard/PatientDashboard";
import LoginForm from "../../features/LoginForm/LoginForm";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.user?.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={users.name ? <PatientDashboard /> : <LoginForm />}
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
