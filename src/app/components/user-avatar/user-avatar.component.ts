import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() type: string;
  @Input() avatarUrl: any;
  @Input() chatName: string;

  constructor() { }

  ngOnInit() {
  }

}
