import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.template.html',
  styleUrls: ['./chat-main.style.scss']
})
export class ChatMainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
