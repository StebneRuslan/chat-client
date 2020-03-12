import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../../modals/profile/profile.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {}

  public openProfile(): void {
    this.dialog.open(ProfileComponent, {
      width: '450px',
    });
  }

}
