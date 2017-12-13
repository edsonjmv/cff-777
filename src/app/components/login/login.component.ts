import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;

  usuario = {
    name: '',
    photo: ''
  };

  subscription: Observable<any>;

  constructor(public _authF: AngularFireAuthModule, private _router: Router, public _authService: AuthService) {
  }

  ngOnInit() {
  }

  signInWithTwitter() {
    this._authService.signInWithTwitter().then((data) => {
      console.log(data);
      console.log(data.user.displayName);
      if (data.user && data.user.displayName) {
        this.usuario.name = data.user.displayName;
      }
      if (data.user && data.user.photoURL) {
        this.usuario.photo = data.user.photoURL;
      }
      console.log(this.usuario);
      return this.usuario;
      // this._authService.setLoggedUser(data.user.displayName, data.user.photoURL);
      // this._router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
    });
  }

  signInWithFacebook() {
    this._authService.signInWithFacebook().then((data) => {
      console.log(data);
      console.log(data.user.displayName);
      if (data.user && data.user.displayName) {
        this.usuario.name = data.user.displayName;
      }
      if (data.user && data.user.photoURL) {
        this.usuario.photo = data.user.photoURL;
      }
      // this._authService.setLoggedUser(data.user.displayName, data.user.photoURL);
      // this._router.navigate(['/home']);
      console.log(this.usuario);
      // this._router.navigate(['/home']);
      }).catch((error) => {
        console.log(error);
      });
  }

  signInWithGoogle() {
    this._authService.signInWithGoogle().then((data) => {
      console.log(data);
      console.log(data.user.displayName);
      if (data.user && data.user.displayName) {
        this.usuario.name = data.user.displayName;
      }
      if (data.user && data.user.photoURL) {
        this.usuario.photo = data.user.photoURL;
      }
      // this._authService.setLoggedUser(data.user.displayName, data.user.photoURL);
      // this._router.navigate(['/home']);
      console.log(this.usuario);
      // this._router.navigate(['/home']);
      }).catch((error) => {
        console.log(error);
      });
  }

}
