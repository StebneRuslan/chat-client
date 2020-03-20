import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.template.html',
  styleUrls: ['./user-avatar.style.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() type: string;
  @Input() avatarUrl: any;
  @Input() chatName: string;

  constructor() { }

  ngOnInit() {
  }

}
