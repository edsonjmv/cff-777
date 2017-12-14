import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private itemDoc: AngularFirestoreDocument<any>;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  exercise = {
    date: '',
    name: '',
    description: '',
    score: ''
  };
  loggedUser = {
    name: '',
    photo: ''
  };

  constructor(db: AngularFirestore, public _db: AngularFirestore, private _authService: AuthService) {
    // this.itemDoc = db.doc<any>('items/1');
    // this.items = this.itemDoc.valueChanges();
    this.itemsCollection = db.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    console.log(this.items);
    this.itemsCollection = this._db.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  ngAfterViewInit() {
    this.loggedUser = this._authService.getLoggedUser();
    console.log(this.loggedUser);
  }

  addItem() {
    this.itemsCollection.add(this.exercise);
    this.exercise = {
      date: '',
      name: '',
      description: '',
      score: ''
    };
  }

  update(item) {
    this.itemDoc.update(item);
  }

}

/*
FACEBOOK LOGIN

Comprobar el estado del inicio de sesión

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

Response

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

En status se especifica el estado de inicio de sesión de la persona que usa la aplicación. El estado puede ser uno de los siguientes:
connected: la persona inició sesión en Facebook y en tu aplicación.
not_authorized: la persona inició sesión en Facebook, pero no en tu aplicación.
unknown: la persona no inició sesión en Facebook y no sabes si lo hizo en tu aplicación o si se llamó antes al método FB.logout(),
por lo que no puede conectarse a Facebook.
authResponse: se incluye si el estado es connected, y consta de los siguientes elementos:
accessToken: contiene un token de acceso para la persona que usa la aplicación.
expiresIn: indica la hora UNIX en que el token caduca y se debe renovar.
signedRequest: un parámetro firmado que contiene información sobre la persona que usa la aplicación.
userID: es el identificador de la persona que usa la aplicación.
Una vez que la aplicación conoce el estado de inicio de sesión de la persona que la usa, puedes realizar una de estas acciones:
Si la persona inició sesión en Facebook y en la aplicación, redirígela a la experiencia de sesión iniciada de la aplicación.
Si la persona no inició sesión en la aplicación o en Facebook, abre el cuadro de diálogo de inicio de sesión con FB.login()
o muéstrale el botón "Iniciar sesión"

Agregar el botón "Iniciar sesión con Facebook"


<fb:login-button
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


*/
