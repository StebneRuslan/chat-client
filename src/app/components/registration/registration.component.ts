import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestsService } from '../../services/requests/requests.service';
import { AuthService } from '../../services/auth/auth.service';
import { EncryptDecryptService } from '../../services/enrcypt-decrypt/encrypt-decrypt.service';

import { RegistrationModel } from './registration.model';
import RegistrationForm from './registration.form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.template.html',
  styleUrls: ['./registration.style.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  public model: RegistrationModel;
  public form: RegistrationForm;
  public registerError = '';
  public registerRequest$ = null;

  constructor(
    private router: Router,
    private api: RequestsService,
    private authService: AuthService,
    private encryptDecryptService: EncryptDecryptService,
  ) {
    this.model = new RegistrationModel();
    this.form = new RegistrationForm(this.model);
  }

  public ngOnInit(): void {}

  public register(): void {
    if (this.model.password !== this.model.confirmPassword) {
      this.registerError = 'Passwords are not equal';
    } else {
      this.registerRequest$ = this.api.post({
        url: '/registration',
        body: { username: this.model.username, password: this.encryptDecryptService.encrypt(this.model.password)}
      })
        .subscribe(
          res => {
            this.authService.setToken(res.apiKey);
            this.router.navigate(['']);
          },
          err => this.registerError = err.error.message
        );
    }
  }

  public ngOnDestroy(): void {
    if (this.registerRequest$) {
      this.registerRequest$.unsubscribe();
    }
  }

}
