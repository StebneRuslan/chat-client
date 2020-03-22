import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditNameComponent} from '../edit-name/edit-name.component';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.template.html',
  styleUrls: ['./modal-header.style.scss']
})
export class ModalHeaderComponent implements OnInit {

  @Input() data: any;
  @Output() closeDialog = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {}

  public editProfileData(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        oldName: this.data.name,
        oldDescription: this.data.description
      }
    });
  }

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
