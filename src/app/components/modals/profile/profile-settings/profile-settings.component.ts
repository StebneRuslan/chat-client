import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.template.html',
  styleUrls: ['./profile-settings.style.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() modalRef: MatDialogRef<any>;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {}

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['login']);
    this.modalRef.close();
  }
}
