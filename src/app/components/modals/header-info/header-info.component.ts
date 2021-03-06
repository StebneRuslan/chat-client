import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';

import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';
import { RequestsService } from '../../../services/requests/requests.service';
import { AuthService } from '../../../services/auth/auth.service';

import { OPEN_CHAT, SHOW_CHAT_ICON } from '../../../actions/main.action';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.template.html',
  styleUrls: ['./header-info.style.scss']
})
export class HeaderInfoComponent implements OnInit, OnDestroy {
  @Input() data: any;

  private fr: FileReader;
  public imageSrc: string | ArrayBuffer;
  public showRemoveIcon = false;
  public showMessageIcon = false;

  constructor(
    private bus: BusService,
    private dialogRef: MatDialog,
    private chatService: ChatService,
    private api: RequestsService,
    public authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.bus.subscribe(SHOW_CHAT_ICON, this.toggleMessageIcon, this);
  }

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = () => this.imageSrc = this.fr.result;
      this.fr.readAsDataURL(file);
      this.api.put({
        url: `/avatars/${this.data.chatId}?type=${this.data.type}`,
        headers: new HttpHeaders({'x-file-name': event.target.files[0].name, 'Content-Type': event.target.files[0].type}),
        body: event.target.files[0]
      })
      .subscribe(
          data => {
            this.data.image = data.url;
            // active chat avatar is updating by event
            if (this.data.type === ChatTypes.PROFILE) {
              this.authService.userData.avatar = data.url;
            }
          },
          error => console.log(error)
      );
    }
  }

  public removeImage(): void {
    this.api.delete({ url: `/avatars/${this.data.chatId}?type=${this.data.type}`})
      .subscribe(
        () => {
          this.data.image = this.imageSrc = '';
          // active chat avatar is updating by event
          if (this.data.type === ChatTypes.PROFILE) {
            this.authService.userData.avatar = '';
          }
        },
        error => console.log(error)
      );
  }

  public toggleMessageIcon(data) {
    this.showMessageIcon = data;
  }

  public handleRemoveIcon(status: boolean): void {
    this.showRemoveIcon = (this.data.image || this.imageSrc) && status;
  }

  public openChat(): void {
    if (this.data.chatId !== (this.data.type === ChatTypes.DIALOG ? this.chatService.activeChat.recipientId : this.chatService.activeChat._id)) {
      this.bus.publish(OPEN_CHAT, { chatId: this.data.chatId, isDialog: this.data.type === ChatTypes.DIALOG });
    }
    this.dialogRef.closeAll();
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(SHOW_CHAT_ICON, this.toggleMessageIcon);
  }

}
