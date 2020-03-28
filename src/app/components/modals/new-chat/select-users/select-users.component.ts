import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { UsersListModel } from '../../../users-list/users-list.model';
import { UserModel } from '../../../users-list/user/user.model';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.template.html',
  styleUrls: ['./select-users.style.scss']
})
export class SelectUsersComponent implements OnInit {
  @Input() type: string;
  @Input() users: UserModel[];
  @Input() usersFilter: UserModel[];
  @Output() selectUser = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {}

  public select(userId: string): void {
    this.selectUser.emit(userId);
  }
}
