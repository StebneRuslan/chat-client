import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() type: string;
  @Input() avatarUrl: string;
  @Input() chatName: string;

  constructor() { }

  ngOnInit() {
  }

}
