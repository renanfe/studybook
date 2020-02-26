import React from 'react'
import { IonToolbar, IonButtons, IonMenuButton, IonContent, IonPage, IonHeader, IonCol, IonGrid, IonRow, IonButton, IonIcon, IonItem, IonList, IonSearchbar } from '@ionic/react';
import { add } from 'ionicons/icons'
import './user-search.scss'

const UserSearch = () => {
    return (
        <>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonSearchbar></IonSearchbar>
                    <IonButtons slot="end">
                        <IonButton color="primary">
                            create
                            <IonIcon slot="end" icon={add} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>

                    </IonItem>
                </IonList>
            </IonContent>
        </>
    )
}

export default UserSearch
