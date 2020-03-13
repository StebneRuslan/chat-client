import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../modals/profile/profile.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.style.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit() {
  }

  public openChatSetting(): void {
    this.dialog.open(ProfileComponent, {
      width: '450px',
      data: {
        showChatSettings: true
      }
    });
  }

}
