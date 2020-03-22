import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';

import { SELECT_CHAT } from '../../../actions/main.action';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.template.html',
  styleUrls: ['./header-info.style.scss']
})
export class HeaderInfoComponent implements OnInit {

  @Input() name: string;
  @Input() editChat: boolean;

  private fr: FileReader;
  public imageSrc: string | ArrayBuffer;

  constructor(
    private bus: BusService,
    private dialogRef: MatDialog,
    private chatService: ChatService,
  ) {}

  public ngOnInit(): void {}

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = () => this.imageSrc = this.fr.result;
      this.fr.readAsDataURL(file);
    }
  }

  public openChat() {
    const chatId = this.chatService.getSelectedChat().id;
    if (chatId && chatId !== this.chatService.getActiveChat().id) {
      this.bus.publish(SELECT_CHAT, chatId);
    }
    this.dialogRef.closeAll();
  }

}
