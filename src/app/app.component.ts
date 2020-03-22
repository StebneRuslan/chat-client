import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from './services/auth/auth.service';
import { RequestsService } from './services/requests/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public title = 'chat';

  constructor(
    private router: Router,
    private authService: AuthService,
    private api: RequestsService
  ) {}

  public ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.api.get({url: '/users/get-one'})
        .subscribe(
          res => this.authService.setUserData(res),
          () => this.authService.logout()
        );
    }
  }
}
