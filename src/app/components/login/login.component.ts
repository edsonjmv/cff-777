import { Component, OnInit, HostBinding, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';
import * as firebase from 'firebase/app';

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

  loggedUser: firebase.User;

  @ViewChild('loginTab') logintab: ElementRef;
  @ViewChild('signupTab') signuptab: ElementRef;
  @ViewChild('loginContainer') loginContainer: ElementRef;
  @ViewChild('signupContainer') signupContainer: ElementRef;

  constructor(public _authF: AngularFireAuthModule, private _renderer: Renderer2, private _router: Router, public _authService: AuthService) {
  }

  ngOnInit() {
    this._authService.user.subscribe((data) => {
      console.log(data);
      this.loggedUser = data;
    }, (error) => {
      console.log(error);
    });
  }

  clickTabLogin() {
    const tabActived = this.logintab.nativeElement;
    const tabDisabled = this.signuptab.nativeElement;
    const containerShowed = this.loginContainer.nativeElement;
    const containerHided = this.signupContainer.nativeElement;
    this.clickTab(tabActived, tabDisabled, containerShowed, containerHided);
  }

  clickTabSignup() {
    const tabActived = this.signuptab.nativeElement;
    const tabDisabled = this.logintab.nativeElement;
    const containerShowed = this.signupContainer.nativeElement;
    const containerHided = this.loginContainer.nativeElement;
    this.clickTab(tabActived, tabDisabled, containerShowed, containerHided);
  }

  clickTab(tabActived, tabDisabled, containerShowed, containerHided) {
    this._renderer.removeClass(tabDisabled, 'current');
    this._renderer.removeClass(containerHided, 'show');
    this._renderer.addClass(tabActived, 'current');
    this._renderer.addClass(containerShowed, 'show');
  }

  signInWithTwitter() {
    this._authService.signInWithTwitter().then((data) => {
      console.log(data);
      this._router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
    });
  }

  signInWithFacebook() {
    this._authService.signInWithFacebook().then((data) => {
      console.log(data);
      this._router.navigate(['/home']);
      }).catch((error) => {
        console.log(error);
      });
  }

  signInWithGoogle() {
    this._authService.signInWithGoogle().then((data) => {
      console.log(data);
      this._router.navigate(['/home']);
      }).catch((error) => {
        console.log(error);
      });
  }

  /*

  var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",

    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second

    findElements: function () {
        var base = this;

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function (state) {
    	var base = this,
            elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
        	elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }

        return base;
    },

    getActiveTab: function () {
        var base = this;

        base.tabsElement.each(function (i, el) {
           if ($(el).hasClass("current")) {
               base.activeTab = $(el);
           }
        });

        return base;
    },

    addClickEvents: function () {
    	var base = this;

        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");

            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });

        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });

        base.inputElements.find("label").on("click", function (e) {
           var $this = $(this),
               $input = $this.next("input");

            $input.focus();
        });

        return base;
    },

    initialize: function () {
        var base = this;

        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function() {
    LoginModalController.initialize();
});

*/

}
