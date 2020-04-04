import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { EditNameComponent } from '../edit-name/edit-name.component';

// configs
import { UserModel } from '../../../models/user.model';
import { SocketMessageModel } from '../../../models/socket.message.model';
import { ChatTypes } from '../../../services/interfaces/chat-types.interfaces';
import {
  CREATE_NEW_CHAT,
  ADD_MEMBERS,
  CLOSE_NEW_CHAT_MODAL
} from '../../../actions/main.action';

// services
import { RequestsService } from '../../../services/requests/requests.service';
import { ChatService } from '../../../services/chat/chat.service';
import { BusService } from '../../../services/bus/bus.service';
import { SocketsService } from '../../../services/sockets/sockets.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.template.html',
  styleUrls: ['./new-chat.style.scss']
})
export class NewChatComponent implements OnInit, OnDestroy {

  public users: UserModel[] = [];
  public usersFilter: UserModel[] = [];

  constructor(
    private dialog: MatDialog,
    private api: RequestsService,
    private bus: BusService,
    private chatService: ChatService,
    private socketsService: SocketsService,
    public dialogRef: MatDialogRef<NewChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createChat = this.createChat.bind(this);
  }

  public ngOnInit(): void {
    this.getContacts();
    this.bus.subscribe(CREATE_NEW_CHAT, this.openCreateChatWindow, this);
    this.bus.subscribe(CLOSE_NEW_CHAT_MODAL, this.closeModal, this);
    this.bus.subscribe(ADD_MEMBERS, this.addMembers, this);
  }

  public getContacts() {
    this.api.get({url: '/contacts'})
      .subscribe(res => {
        res.forEach(contact => {
          contact.blurred = !!this.data.contacts.find(existContact => existContact._id === contact._id);
        });
        this.users = [...res];
        this.usersFilter = [...res];
      });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public selectUser(userId: string): void {
    const selectedUser = this.users.find(user => user._id === userId);
    selectedUser.selected = !selectedUser.selected;
  }

  public openCreateChatWindow(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        action: 'create',
        name: '',
        description: '',
        type: this.data.type === 'New channel' ? ChatTypes.CHANNEL : ChatTypes.GROUP,
        callback: this.createChat
      }
    });
  }

  public addMembers(): void {
    this.socketsService.send(new SocketMessageModel('add-members', {
      chatId: this.chatService.activeChat._id,
      users: this.users.filter(user => user.selected).map(user => user._id)
    }));
    this.dialogRef.close();
  }

  public createChat(title: string, description: string, dialog: any): void {
    this.chatService.createChat(
      title,
      this.data.type === 'New channel' ? ChatTypes.CHANNEL : ChatTypes.GROUP,
      description,
      this.users.filter(user => user.selected).map(user => user._id))
      .subscribe(
        () => {
          this.dialogRef.close();
          dialog.close();
        },
          err => console.log('error', err)
      );
  }

  public ngOnDestroy(): void {
    this.bus.unsubscribe(CREATE_NEW_CHAT, this.openCreateChatWindow);
    this.bus.unsubscribe(CLOSE_NEW_CHAT_MODAL, this.closeModal);
    this.bus.unsubscribe(ADD_MEMBERS, this.addMembers);
  }
}
