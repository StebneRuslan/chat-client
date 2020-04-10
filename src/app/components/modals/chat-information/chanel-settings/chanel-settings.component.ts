import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ChatService} from '../../../../services/chat/chat.service';
import { SocketsService } from '../../../../services/sockets/sockets.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { RequestsService } from '../../../../services/requests/requests.service';

import { MessageModalComponent } from '../../message-modal/message-modal.component';

import { MessageModalModel } from '../../message-modal/message-modal.model';
import { SocketMessageModel } from '../../../../models/socket.message.model';

@Component({
  selector: 'app-chanel-settings',
  templateUrl: './chanel-settings.template.html',
  styleUrls: ['./chanel-settings.style.scss']
})
export class ChanelSettingsComponent implements OnInit {

  @Input() editChat: boolean;
  @Input() description: string;
  @Input() chatUsers: any;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private chatService: ChatService,
    private api: RequestsService,
    public socketsService: SocketsService,
  ) { }

  public ngOnInit() {}

  public leaveChannel(): void {
    this.socketsService.send(new SocketMessageModel('remove-members', {
      chatId: this.chatService.activeChat._id,
      userId: this.authService.userData.id
    }));
  }

  public deleteChannel(): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '450px',
      data: new MessageModalModel('Delete channel?', true, true)
    });
    dialogRef.afterClosed()
      .subscribe(res  => {
        if (res) {
          this.api.delete({url: `/chats/${this.chatService.activeChat._id}`})
            .subscribe(() => console.log('Success'));
        }
      });
  }

}
