import { Component, EventEmitter, OnInit, Output, Input, OnDestroy } from '@angular/core';

import { MessageModel } from '../../../../models/message.model';
import { MessageTypes } from '../../../../services/interfaces/message-types.interfaces';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.template.html',
  styleUrls: ['./messages-list.style.scss']
})

export class MessagesListComponent implements OnInit, OnDestroy {

  @Output() selectMessage = new EventEmitter();
  @Output() scrollMessages = new EventEmitter();
  @Input() messages: MessageModel[];

  public REPORT: string = MessageTypes.REPORT;

  constructor() { }

  public ngOnInit(): void {}

  public onScrollUp(): void {
    this.scrollMessages.emit();
  }

  public select(messageId: string): void {
    this.selectMessage.emit(messageId);
  }

  public ngOnDestroy(): void {}
}
