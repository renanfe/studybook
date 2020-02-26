import React, { Fragment } from 'react'
import './side-menu.scss'
import { IonMenu, IonItem, IonList, IonContent, IonLabel, IonToolbar, IonHeader, IonTitle } from '@ionic/react';

const MainMenu = (props) => {

  return (
      <IonMenu side="start" menuId="main-menu" contentId="main-menu" type="push" swipeGesture="false">
        <IonHeader class="ion-no-border">
          <IonToolbar color="primary">
            <IonTitle>Gloria Neighborhood</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary" >
          <IonList lines="none" class="ion-no-padding">
            <IonItem routerLink="/users" color="primary">
              <IonLabel>Users</IonLabel>
            </IonItem>
            <IonItem routerLink="/homes" color="primary">
              <IonLabel>Homes</IonLabel>
            </IonItem>
            <IonItem routerLink="/login" color="primary">
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
  )
}

export default MainMenu
