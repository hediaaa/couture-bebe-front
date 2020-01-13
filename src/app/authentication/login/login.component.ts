import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
 //   animations   : fuseAnimations
})
export class LoginComponent implements OnInit {
    // loginForm: FormGroup;
  loginForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService)
  {        // Configure the layout
      // this._fuseConfigService.config = {
      //     layout: {
      //         navbar   : {
      //             hidden: true
      //         },
      //         toolbar  : {
      //             hidden: true
      //         },
      //         footer   : {
      //             hidden: true
      //         },
      //         sidepanel: {
      //             hidden: true
      //         }
      //     }
      // };
    }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit () {
    console.log(this.loginForm);

    this.loginInfo = new AuthLoginInfo(
      this.loginForm.username,
      this.loginForm.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.errorMessage;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
