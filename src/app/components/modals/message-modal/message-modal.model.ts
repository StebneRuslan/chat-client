export class MessageModalModel {
  public message: string;
  public okButton: boolean;
  public cancelButton: boolean;
  constructor(message: string, okButton: boolean = false, cancelButton: boolean = false) {
    this.message = message;
    this.okButton = okButton;
    this.cancelButton = cancelButton;
  }
}
