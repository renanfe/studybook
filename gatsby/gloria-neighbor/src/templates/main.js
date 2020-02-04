import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import './main.scss';

const Main = props => (
  <div className="container">
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Main;