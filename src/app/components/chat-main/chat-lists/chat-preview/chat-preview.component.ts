import { Component, Input, OnInit } from '@angular/core';
import { ChatTypes } from '../../../../services/interfaces/chat-types.interfaces';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.template.html',
  styleUrls: ['./chat-preview.style.scss']
})
export class ChatPreviewComponent implements OnInit {

  public chatName = '';
  public activeChat: null;

  @Input() activeUser;
  @Input() chat;

  constructor() { }

  public ngOnInit(): void {}

}
