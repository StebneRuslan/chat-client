import { Component, EventEmitter, OnInit, Output, Input, OnDestroy } from '@angular/core';

import { BusService } from '../../../../services/bus/bus.service';

import { MessageModel } from '../../../../models/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.template.html',
  styleUrls: ['./messages-list.style.scss']
})

export class MessagesListComponent implements OnInit, OnDestroy {

  @Output() selectMessage = new EventEmitter();
  @Output() scrollMessages = new EventEmitter();
  @Input() messages: MessageModel[];

  constructor(
    private bus: BusService
  ) { }

  public ngOnInit(): void {}

  public onScroll(): void {
    this.scrollMessages.emit();
  }

  public select(messageId: string): void {
    this.selectMessage.emit(messageId);
  }

  public ngOnDestroy(): void {}
}
