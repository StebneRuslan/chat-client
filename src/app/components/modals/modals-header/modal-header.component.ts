import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { BusService } from '../../../services/bus/bus.service';
import { RequestsService } from '../../../services/requests/requests.service';

import { EditNameComponent} from '../edit-name/edit-name.component';

import { UPDATE_CHAT_INFO, EDIT_INFO_ERROR } from '../../../actions/main.action';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.template.html',
  styleUrls: ['./modal-header.style.scss']
})
export class ModalHeaderComponent implements OnInit {

  public chatTypes = ChatTypes;

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
        name: this.data.name,
        description: this.data.description,
        type: this.data.type,
        chatId: this.data.chatId,
        callback: this.save
      }
    });
  }

  public save(name: string, description: string, dialog: any): any {
    const url = this.data.type === this.chatTypes.PROFILE ? `/users/${this.data.chatId}` : `/chats/${this.data.chatId}`;
    const body = this.data.type === this.chatTypes.PROFILE ? { username: name } : { chatName: name, description };
    this.api.put({url, body })
      .subscribe(
        () => {
          this.bus.publish(UPDATE_CHAT_INFO, {name, description});
          dialog.close();
        },
        err => this.bus.publish(EDIT_INFO_ERROR, err)
      );
  }

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
