export class ScrollModel {
  public dateOfLast = new Date().toISOString();
  constructor(dateOfLast?: string) {
    this.dateOfLast = dateOfLast || new Date().toISOString();
  }
}
