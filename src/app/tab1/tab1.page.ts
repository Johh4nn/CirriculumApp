import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonActionSheet, IonButton, IonAlert, IonChip, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone'; // Consolidar importaciones

import { ExploreContainerComponent } from '../explore-container/explore-container.component'; // Importación externa no duplicada

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonActionSheet, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonChip, 
    IonItem, IonLabel, IonList, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, ExploreContainerComponent // Eliminados duplicados
  ]
})
export class Tab1Page {
  // Constructor vacio, sin necesidad de inicializar algo aquí
  constructor() {}

  // Definición de botones para el Action Sheet
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  // Definición de botones para la alerta
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
}
