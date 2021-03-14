import './global.css';
import './app.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import api from './services/api';
//New Comment
export default function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  return (
    <div id="app">
      <Sidebar devs={devs} setDevs={setDevs} />
      <Main devs={devs} />
    </div>
  );
};
