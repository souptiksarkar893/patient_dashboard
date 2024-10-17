import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import AuthorizationForm from './components/AuthorizationForm';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/patients" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/patients" element={isLoggedIn ? <PatientList /> : <Navigate to="/" />} />
          <Route path="/patients/:id" element={isLoggedIn ? <PatientDetails /> : <Navigate to="/" />} />
          <Route path="/authorization" element={isLoggedIn ? <AuthorizationForm /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
