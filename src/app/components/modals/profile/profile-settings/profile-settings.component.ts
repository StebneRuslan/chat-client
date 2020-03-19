import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.template.html',
  styleUrls: ['./profile-settings.style.scss']
})
export class ProfileSettingsComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialogRef: MatDialog,
  ) { }

  public ngOnInit(): void {}

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['login']);
    this.dialogRef.closeAll();
  }
}
