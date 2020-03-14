import { Component, OnInit } from '@angular/core';
import { UsersListModel } from '../../../users-list/users-list.model';
import { UserModel } from '../../../users-list/user/user.model';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.template.html',
  styleUrls: ['./select-users.style.scss']
})
export class SelectUsersComponent implements OnInit {
  public users: UserModel[] = new UsersListModel().users;
  public usersFilter: UserModel[] = this.users;
  constructor() { }

  public ngOnInit(): void {}

  public search(value: string): void {
    this.usersFilter = this.users.filter(user => user.username.indexOf(value) > -1);
  }

  public selectUser(userId: string): void {
    const selectedUser = this.users.find(user => user.id === userId);
    selectedUser.selected = !selectedUser.selected;
    console.log('Selected users', this.users.filter(user => user.selected));
  }
}
