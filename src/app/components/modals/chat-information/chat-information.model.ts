import { CHAT_TYPES } from '../../../actions/main.action';

export class ChatInformationModel {
  public type: string;
  public title: string;
  public chatId: string;
  public editChat: boolean;

  constructor(type: string, editChat: boolean, chatId?: string) {
    this.type = type;
    this.editChat = editChat;
    this.chatId = chatId;
    this.title = type === CHAT_TYPES.profile ? 'Settings' : this.type + ' info';
  }

}
