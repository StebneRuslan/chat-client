import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../../../../services/bus/bus.service';
import { CREATE_NEW_CHAT, ADD_MEMBERS } from '../../../../actions/main.action';

@Component({
  selector: 'app-new-chat-footer',
  templateUrl: './new-chat-footer.template.html',
  styleUrls: ['./new-chat-footer.style.scss']
})
export class NewChatFooterComponent implements OnInit {
  @Input() type: string;
  constructor(private bus: BusService) { }

  public ngOnInit() {}

  public createChat() {
    this.type === 'Contacts' ? this.bus.publish(ADD_MEMBERS) : this.bus.publish(CREATE_NEW_CHAT);
  }

  public close() {}

}
