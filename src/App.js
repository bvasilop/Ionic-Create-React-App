import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

const form = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
            <IonButton onClick={this.props.dismissModal}>Cancel</IonButton>

          </IonCard>
            {/*-- Default Checkbox --*/}
    <IonCheckbox />

{/*-- Disabled Checkbox --*/}
<IonCheckbox disabled={true} />

{/*-- Checked Checkbox --*/}
<IonCheckbox checked={true} />

{/*-- Checkbox Colors --*/}
<IonCheckbox color="primary" />
<IonCheckbox color="secondary" />
<IonCheckbox color="danger" />
<IonCheckbox color="light" />
<IonCheckbox color="dark" />

{/*-- Checkboxes in a List --*/}
<IonList>
  { form.map(({val, isChecked}) => (
    <IonItem key={val}>
      <IonLabel>{val}</IonLabel>
      <IonCheckbox slot="end" value={val} checked={isChecked} />
    </IonItem>
  )) }
</IonList>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
