import { ChatTypes } from '../services/interfaces/chat-types.interfaces';

export class ChatInformationModel {
  public type: string;
  public title: string;
  public chatId: string;
  public editChat: boolean;

  constructor(type: string, editChat: boolean, chatId?: string) {
    this.type = type;
    this.editChat = editChat;
    this.chatId = chatId;
    this.title = type === ChatTypes.PROFILE ? 'Settings' : this.type + ' info';
  }

}
