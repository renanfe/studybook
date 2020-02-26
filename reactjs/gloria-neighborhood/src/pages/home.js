import React, { Fragment } from 'react'
import { IonMenuButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonContent, IonPage } from '@ionic/react'

const Home = () => {
    return (
        <>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                aaaaa
            </IonContent>
        </>

    )
}

export default Home
