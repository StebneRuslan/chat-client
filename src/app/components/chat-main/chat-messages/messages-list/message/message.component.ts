import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.template.html',
  styleUrls: ['./message.style.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: MessageModel;
  constructor() { }

  public ngOnInit(): void {}

  public changeSelectStatus(status: boolean): void {
    this.message.hover = status;
  }
}
