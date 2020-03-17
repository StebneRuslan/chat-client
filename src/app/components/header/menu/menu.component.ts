import { Component, OnInit } from '@angular/core';
import { ModalMainComponent } from '../../modals/modal-main/modal-main.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {}

  public openModal(type: string): void {
    this.dialog.open(ModalMainComponent, {
      width: '450px',
      data: {
        activeModal: type
      }
    });
  }

}
