import React, { useState, useEffect } from 'react'
import { IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent, IonPage, IonHeader, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonItem, IonList } from '@ionic/react';
import { useParams } from 'react-router-dom';
import GloriaApi from '../services/api';
import './user.scss'

const User = () => {

    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        (async function getUser() {
            const response = await GloriaApi.getUser(id);
            setUser(response.data)
        })()
    }, [])


    return (
        <>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>User</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow >
                        <IonCol className="ion-padding">
                            <div className="user-group ">
                                <p className="text-user-label">Name: </p><p className="text-user-info">{user.name}</p>
                            </div>
                            <div className="user-group ">
                                <p className="text-user-label">E-mail: </p><p className="text-user-info">{user.email}</p>
                            </div>
                            <div className="user-group ">
                                <p className="text-user-label">Username: </p><p className="text-user-info">{user.username}</p>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    )
}

export default User
