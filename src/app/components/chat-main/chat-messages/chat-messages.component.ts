import { Component, OnDestroy, OnInit } from '@angular/core';
import { BusService } from '../../../services/bus/bus.service';

import { SELECT_CHAT } from '../../../actions/main.action';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  constructor(private bus: BusService) { }

  public ngOnInit(): void {
    this.bus.subscribe(SELECT_CHAT, this.getChatData, this);
  }

  public getChatData(data) {}

  public ngOnDestroy() {
    this.bus.unsubscribe(SELECT_CHAT, this.getChatData);
  }

}
