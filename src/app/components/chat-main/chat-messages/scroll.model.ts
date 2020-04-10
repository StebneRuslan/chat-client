export class ScrollModel {
  public lastMessageDate = new Date().toISOString();
  constructor(dateOfLast?: string) {
    this.lastMessageDate = dateOfLast || new Date().toISOString();
  }
}
