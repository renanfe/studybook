import React from 'react';
import './dev.item.css';

export default function DevItem({ dev }) {
  return (
    <li key={dev._id} className="dev-item">
      <header>
        <img src={dev.avatar_url} alt="avatar"></img>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil</a>
    </li>
  );
}

