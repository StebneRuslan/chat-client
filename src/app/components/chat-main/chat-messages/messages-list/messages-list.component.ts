import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { MessageModel } from '../../../../models/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.template.html',
  styleUrls: ['./messages-list.style.scss']
})

export class MessagesListComponent implements OnInit {
  @Output() selectMessage = new EventEmitter();
  @Input() messages: MessageModel[];
  constructor() { }

  public ngOnInit(): void {}

  public select(messageId: string): void {
    this.selectMessage.emit(messageId);
  }
}
