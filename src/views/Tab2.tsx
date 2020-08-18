import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from "@ionic/react";
import { pin } from "ionicons/icons";
import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Tab 2" />
      <IonContent>
        <Grid>
          <IonList></IonList>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon color="primary" icon={pin} slot="start" />
              <IonLabel>Totally cool</IonLabel>
              <IonButton fill="outline" slot="end">
                View
              </IonButton>
            </IonItem>

            <IonCardContent>
              This is content, without any paragraph or header tags, within an
              ion-cardContent element.
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonItem routerLink="/tab2/details" class="activated">
              <IonIcon name="wifi" slot="start" />
              <IonLabel>Card Link Item 1 .activated</IonLabel>
            </IonItem>

            <IonItem href="#">
              <IonIcon name="wine" slot="start" />
              <IonLabel>Card Link Item 2</IonLabel>
            </IonItem>

            <IonItem class="activated">
              <IonIcon name="warning" slot="start" />
              <IonLabel>Card Button Item 1 .activated</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon name="walk" slot="start" />
              <IonLabel>Card Button Item 2</IonLabel>
            </IonItem>
          </IonCard>
        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
