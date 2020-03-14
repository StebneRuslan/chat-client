import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserModel } from './user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.template.html',
  styleUrls: ['./users-list.style.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: UserModel[];
  @Output() selectUser = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {}

  public select(userId: string): void {
    this.selectUser.emit(userId);
  }
}
