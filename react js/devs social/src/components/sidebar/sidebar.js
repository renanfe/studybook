import React from 'react';
import DevForm from '../dev-form/dev.form';
import api from '../../services/api';
import './sidebar.css';

export default function Sidebar({ devs, setDevs }) {

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  };

  return (
    <aside>
      Cadastrar
    <DevForm onSubmit={handleAddDev} />
    </aside>
  );
}