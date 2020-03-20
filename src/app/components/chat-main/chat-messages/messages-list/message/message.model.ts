import { UserModel } from '../../../../users-list/user/user.model';

export class MessageModel {
  public id: string;
  public text: string;
  public user: UserModel;
  public date: string;
  public selected: boolean;
  public hover: boolean;
}
