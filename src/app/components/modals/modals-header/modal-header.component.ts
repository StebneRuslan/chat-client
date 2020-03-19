import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditNameComponent} from '../edit-name/edit-name.component';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.template.html',
  styleUrls: ['./modal-header.style.scss']
})
export class ModalHeaderComponent implements OnInit {

  @Input() title: string;
  @Output() closeDialog = new EventEmitter();

  constructor( public dialog: MatDialog ) { }

  @Input() name: string;
  @Input() editProfile: boolean;

  public ngOnInit(): void {}

  public editProfileData(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        oldTitle: this.name,
        nameType: 'profile'
      }
    });
  }

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
