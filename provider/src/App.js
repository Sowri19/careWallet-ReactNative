// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import PatientList from './components/PatientList';

const App = () => {
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);

  const handleLogin = (doctor) => {
    setLoggedInDoctor(doctor);
  };

  return (
    <div>
      {!loggedInDoctor ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PatientList loggedInDoctor={loggedInDoctor} />
      )}
    </div>
  );
};

export default App;
