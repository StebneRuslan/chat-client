import { Component, OnInit, Input } from '@angular/core';

import { SocketMessageModel } from '../../../../models/socket.message.model';

import { ChatService} from '../../../../services/chat/chat.service';
import { SocketsService } from '../../../../services/sockets/sockets.service';
import { AuthService } from '../../../../services/auth/auth.service';

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
    public chatService: ChatService,
    public socketsService: SocketsService,
  ) { }

  public ngOnInit() {}

  public leaveChannel() {
    this.socketsService.send(new SocketMessageModel('remove-members', {
      chatId: this.chatService.activeChat._id,
      userId: this.authService.userData.id
    }));
  }

}
