export class ChatPreviewModel {
  public '_id': string = '';
  public chatName: string;
  public description?: string;
  public chatType: string;
  public author: string;
  public users: any;
  public avatar?: any;
  public admins?: any;
  public recipientId?: string;
  public lastMessage: any;
  public createdAt: string;
}
