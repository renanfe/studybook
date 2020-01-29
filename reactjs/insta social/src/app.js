import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';

export default class App extends React.Component{
  render (){
    return (
      <BrowserRouter>
      <Header></Header>
        <Routes />
      </BrowserRouter>
    )
  }
}

