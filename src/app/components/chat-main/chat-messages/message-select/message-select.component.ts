import { Component, OnInit, Input } from '@angular/core';
import { MessageModalComponent } from '../../../modals/message-modal/message-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageModalModel } from '../../../modals/message-modal/message-modal.model';
import { MessageModel } from '../messages-list/message/message.model';

@Component({
  selector: 'app-message-select',
  templateUrl: './message-select.template.html',
  styleUrls: ['./message-select.style.scss']
})
export class MessageSelectComponent implements OnInit {
  @Input() messages: MessageModel[];
  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {}

  public deleteMessages(): void {
    this.dialog.open(MessageModalComponent, {
      width: '450px',
      data: new MessageModalModel('Delete messages?', true, true)
    });
  }

  public clearSelection(): void {

  }
}
