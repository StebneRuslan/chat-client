import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.template.html',
  styleUrls: ['./profile-settings.style.scss']
})
export class ProfileSettingsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {}

  public logout(): void {
    this.authService.logout();
  }
}
