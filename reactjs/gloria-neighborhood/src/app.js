import React, { useEffect } from 'react';
import './app.scss';
import SignUp from './pages/signup'
import Login from './pages/login'
import { IonApp, IonSplitPane, IonRouterOutlet, } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import MainMenu from './components/main-menu';
import { Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'
import UserSearch from './pages/user-search';

function App() {

  const path = window.location.pathname
  const pages = ['/login']

  return (
    <IonApp>
      <IonSplitPane when="sm" contentId="main-menu" disabled={pages.includes(path)}>
        <MainMenu></MainMenu>
        <IonReactRouter>
          <IonRouterOutlet id="main-menu">
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/homes">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <UserSearch></UserSearch>
            </Route>
            <Route exact path="/users/:id">
              <User></User>
            </Route>
            <Redirect exact from="/" to="/User"></Redirect>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonSplitPane>
    </IonApp>
  );
}

export default App;
