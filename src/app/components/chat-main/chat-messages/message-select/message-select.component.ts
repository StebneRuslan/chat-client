import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SocketsService } from '../../../../services/sockets/sockets.service';
import { BusService } from '../../../../services/bus/bus.service';
import { ChatService } from '../../../../services/chat/chat.service';

import { MessageModalComponent } from '../../../modals/message-modal/message-modal.component';

import { MessageModalModel } from '../../../modals/message-modal/message-modal.model';
import { MessageModel } from '../../../../models/message.model';
import { SocketMessageModel } from '../../../../models/socket.message.model';
import { CLEAR_SELECT_MESSAGE } from '../../../../actions/main.action';

@Component({
  selector: 'app-message-select',
  templateUrl: './message-select.template.html',
  styleUrls: ['./message-select.style.scss']
})
export class MessageSelectComponent implements OnInit {

  @Input() messages: MessageModel[];

  constructor(
    private dialog: MatDialog,
    private bus: BusService,
    private chatService: ChatService,
    private socketsService: SocketsService
  ) {}

  public ngOnInit(): void {}

  public deleteMessages(): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '450px',
      data: new MessageModalModel('Delete messages?', true, true)
    });
    dialogRef.afterClosed()
      .subscribe(res  => {
        if (res) {
          this.socketsService.send(new SocketMessageModel('delete-messages', {
            messages: this.messages.map(el => el._id),
            chatId: this.chatService.activeChat._id
          }));
        }
      });
  }

  public clearSelection(): void {
    this.bus.publish(CLEAR_SELECT_MESSAGE);
  }
}
