import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';
import { UploadService } from '../../../services/upload/upload.service';

import { SELECT_CHAT } from '../../../actions/main.action';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.template.html',
  styleUrls: ['./header-info.style.scss']
})
export class HeaderInfoComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() editChat: boolean;

  private fr: FileReader;
  public imageSrc: string | ArrayBuffer;
  public showRemoveIcon = false;

  constructor(
    private bus: BusService,
    private dialogRef: MatDialog,
    private chatService: ChatService,
    private uploadService: UploadService
  ) {}

  public ngOnInit(): void {}

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = () => this.imageSrc = this.fr.result;
      this.fr.readAsDataURL(file);
      this.uploadService.uploadFile(event.target.files[0].name, event.target.files[0])
        .subscribe(
          data => {
            this.image = data.url;
          },
          error => console.log(error));
    }
  }

  public removeImage(): void {
    // TODO separate user and chat
    this.uploadService.removeAvatar()
      .subscribe(
        () => {
          this.image = '';
        },
        error => console.log(error));
  }

  public handleRemoveIcon(status: boolean): void {
    this.showRemoveIcon = (this.image || this.imageSrc) && status;
  }

  public openChat() {
    const chatId = this.chatService.getSelectedChat().id;
    if (chatId && chatId !== this.chatService.getActiveChat().id) {
      this.bus.publish(SELECT_CHAT, chatId);
    }
    this.dialogRef.closeAll();
  }

}
