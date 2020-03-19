import { CHAT_TYPES } from '../../../actions/main.action';

export class ProfileModel {
  public type: string;
  public title: string;
  public chatId: string;
  public editProfile: boolean;

  constructor(type: string, editProfile: boolean, chatId?: string) {
    this.type = type;
    this.editProfile = editProfile;
    this.chatId = chatId;
    this.title = type === CHAT_TYPES.profile ? 'Settings' : this.type + ' info';
  }

}
