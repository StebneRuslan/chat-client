import { UserModel } from './user.model';

export class MessageModel {
  public '_id': string;
  public message: string;
  public user: UserModel;
  public createdAt: string;
  public selected: boolean;
  public messageType: string;
  public chatId: string;
}
