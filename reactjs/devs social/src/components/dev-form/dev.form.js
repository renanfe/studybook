import React, { useState, useEffect } from 'react';
import './dev.form.css';

export default function DevForm({ onSubmit }) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => console.log(err),
      { timeout: 30000 })
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let newTechs = techs.split(',').map(tech => tech.trim());
    await onSubmit({
      github_username,
      'techs': newTechs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('');
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário Github</label>
        <input name="github_username" value={github_username} onChange={async e => await setGithubUsername(e.target.value)} id="username_github"></input>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)}></input>
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" type="number" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" type="number" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}