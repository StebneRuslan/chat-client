import { UserModel } from '../../../../users-list/user/user.model';

export class MessageModel {
  id: string;
  public text: string;
  public user: UserModel;
  date: string;
  selected: boolean;
  hover: boolean;
}
