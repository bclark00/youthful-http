import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonToolbar
} from "@ionic/react";
import React from "react";

export default function() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Plan Ahead</IonCardSubtitle>
          <IonCardTitle>Your Preconception Checklist</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Start taking a prenatal vitamin
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Get your preconception tests done
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Reach a healthy weight (calculate your BMI here)
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Start or continue an exercise regimen
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Make sure you're up-to-date on your vaccinations
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Talk to your family to create a family medical history{" "}
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Schedule a dental cleaning (if you haven't had one in the last 6
                months)
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Make sure you're up-to-date on your Pap
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Make a list of any medications or supplements you currently take
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Make sure any medical conditions you have are under control and
                optimized for pregnancy
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Check your insurance benefits to see what's covered (i.e. birth
                centers, hospitals, midwives, doulas, etc.)
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                Find a healthcare provider experienced in preconception care
                (bonus points if you find one you can continue your care with
                throughout your pregnancy!)
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel className="ion-text-wrap">
                After preconception testing, schedule a preconception visit to
                review all of the above
              </IonLabel>
            </IonItem>
            {/*
              <IonItem>
                <IonIcon color="primary" icon={add} slot="start" />
                <IonInput
                  placeholder="Add a healthy todo"
                  type="text"
                  className="ion-text-wrap"
                ></IonInput>
              </IonItem>
             
              <IonItemSliding>
                <IonItemOptions side="start">
                  <IonItemOption onClick={() => console.log("favorite clicked")}>
                    Favorite
                  </IonItemOption>
                  <IonItemOption
                    color="danger"
                    onClick={() => console.log("share clicked")}
                  >
                    Share
                  </IonItemOption>
                </IonItemOptions>
  
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Item Options</IonLabel>
                </IonItem>
  
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => console.log("unread clicked")}>
                    Unread
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
             
              <IonItemSliding>
                <IonItemOptions side="start">
                  <IonItemOption color="danger" expandable>
                    Delete
                  </IonItemOption>
                </IonItemOptions>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Expandable Options</IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="tertiary" expandable>
                    Archive
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
           
              <IonItemSliding id="item100">
                <IonItem href="#">
                  <IonLabel>
                    <h2>HubStruck Notifications</h2>
                    <p>A new message in your network</p>
                    <p>Oceanic Next has joined your network</p>
                  </IonLabel>
                  <IonNote slot="end">10:45 AM</IonNote>
                </IonItem>
                <IonItemOptions side="start">
                  <IonItemOption>
                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
                <IonItemOptions side="end">
                  <IonItemOption color="danger">
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                  </IonItemOption>
                  <IonItemOption>
                    <IonIcon slot="icon-only" icon={star}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            
              <IonItemSliding>
                <IonItem>
                  <IonLabel>Sliding Item, Icons Start</IonLabel>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color="primary">
                    <IonIcon slot="start" icon={more}></IonIcon>
                    More
                  </IonItemOption>
                  <IonItemOption color="secondary">
                    <IonIcon slot="start" icon={archive}></IonIcon>
                    Archive
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
     
              <IonItemSliding>
                <IonItem>
                  <IonLabel>Sliding Item, Icons End</IonLabel>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color="primary">
                    <IonIcon slot="end" icon={more}></IonIcon>
                    More
                  </IonItemOption>
                  <IonItemOption color="secondary">
                    <IonIcon slot="end" icon={archive}></IonIcon>
                    Archive
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
           
              <IonItemSliding>
                <IonItem>
                  <IonLabel>Sliding Item, Icons Top</IonLabel>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color="primary">
                    <IonIcon slot="top" icon={more}></IonIcon>
                    More
                  </IonItemOption>
                  <IonItemOption color="secondary">
                    <IonIcon slot="top" icon={archive}></IonIcon>
                    Archive
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            
              <IonItemSliding>
                <IonItem>
                  <IonLabel>Sliding Item, Icons Bottom</IonLabel>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption color="primary">
                    <IonIcon slot="bottom" icon={more}></IonIcon>
                    More
                  </IonItemOption>
                  <IonItemOption color="secondary">
                    <IonIcon slot="bottom" icon={archive}></IonIcon>
                    Archive
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            */}
          </IonList>
        </IonCardContent>
        <IonToolbar color="white">
          <IonLabel
            color="primary"
            className="ion-padding-bottom ion-padding-start"
          >
            <strong>Be ready.</strong>
          </IonLabel>
          {/*
            <IonButtons slot="end" className="ion-padding-end ">
              <IonButton routerLink="/signup">Learn more</IonButton>
            </IonButtons>
          */}
        </IonToolbar>
      </IonCard>
    </>
  );
}
