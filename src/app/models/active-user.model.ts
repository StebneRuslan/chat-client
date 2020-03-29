export class ActiveUserModel {
  public id = '';
  public username = '';
  public avatar = '';

  constructor(id: string = '', username: string = '', avatar: string = '') {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
  }
}
