import { Component, OnInit, Input } from '@angular/core';

import { SocketMessageModel } from '../../../../models/socket.message.model';

import { ChatService} from '../../../../services/chat/chat.service';
import { SocketsService } from '../../../../services/sockets/sockets.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { RequestsService } from '../../../../services/requests/requests.service';

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
    this.api.delete({url: `/chats/${this.chatService.activeChat._id}`})
      .subscribe(() => console.log('Success'));
  }

}
