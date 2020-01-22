import React, { Component } from 'react';
import './header.css';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="header-content">
          <Link to="/">
          <img src={logo} alt="InstaRocket"></img>
          </Link>
          <Link to="/news">
          <img src={camera} alt="Enviar Publicação"></img>
          </Link>
        </div>
      </header>

    )
  }
}
