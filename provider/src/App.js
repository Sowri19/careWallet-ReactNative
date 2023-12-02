// src/App.js
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import PatientList from './components/PatientList';
import { CookiesProvider, useCookies } from "react-cookie";

const App = () => {
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);
  const [cookies, setCookie] = useCookies(["doctor"]);

  const handleLogin = (doctor) => {
    setLoggedInDoctor(doctor);
    setCookie("doctor", doctor, { path: "/" });
  };

  useEffect(() => {
    const doctor = cookies.doctor
    if (doctor) {
      setLoggedInDoctor(doctor);
    }
  }, [cookies.doctor])

  return (
    <CookiesProvider>
    <div>
      {!loggedInDoctor ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PatientList loggedInDoctor={loggedInDoctor} />
      )}
    </div>
    </CookiesProvider>
  );
};

export default App;
