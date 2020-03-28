import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { EditNameComponent} from '../edit-name/edit-name.component';
import { CHAT_TYPES, UPDATE_CHAT_INFO } from '../../../actions/main.action';
import { BusService } from '../../../services/bus/bus.service';
import {RequestsService} from '../../../services/requests/requests.service';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.template.html',
  styleUrls: ['./modal-header.style.scss']
})
export class ModalHeaderComponent implements OnInit {
  public chatTypes = CHAT_TYPES;
  @Input() data: any;
  @Output() closeDialog = new EventEmitter();

  constructor(
    private bus: BusService,
    private api: RequestsService,
    public dialog: MatDialog
  ) {
    this.save = this.save.bind(this);
  }

  public ngOnInit(): void {}

  public editProfileData(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        oldName: this.data.name,
        oldDescription: this.data.description,
        type: this.data.type,
        chatId: this.data.chatId,
        callback: this.save
      }
    });
  }

  public save(oldName: string, oldDescription: string, dialog: any) {
    const url = this.data.type === this.chatTypes.profile ? `/users/${this.data.chatId}` : `/chats/${this.data.chatId}`;
    // TODO: do request for other chat data
    if (this.data.type === this.chatTypes.profile) {
      this.api.put({url, body: { username: oldName}})
        .subscribe(
          () => {
            this.bus.publish(UPDATE_CHAT_INFO, {name: oldName});
            dialog.close();
          },
          err => console.log(err.error.message)
        );
    }
  }

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
