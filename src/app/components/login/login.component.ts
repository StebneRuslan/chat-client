import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestsService } from '../../services/requests/requests.service';
import { AuthService } from '../../services/auth/auth.service';
import { EncryptDecryptService } from '../../services/enrcypt-decrypt/encrypt-decrypt.service';

import { LoginModel } from './login.model';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public model: LoginModel;
  public form: LoginForm;
  public loginError = '';
  public loginRequest$ = null;

  constructor(
    private router: Router,
    private api: RequestsService,
    private authService: AuthService,
    private encryptDecryptService: EncryptDecryptService,
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public ngOnInit(): void {}

  public login() {
    this.loginRequest$ = this.api.post({
      url: '/login',
      body: { username: this.model.username, password: this.encryptDecryptService.encrypt(this.model.password) }
    })
      .subscribe(
        res => {
          this.authService.setToken(res.apiKey);
          this.authService.setUserId(res.userId);
          this.router.navigate(['']);
        },
        err => this.loginError = err.error.message
      );
  }

  public ngOnDestroy(): void {
    if (this.loginRequest$) {
      this.loginRequest$.unsubscribe();
    }
  }

}
