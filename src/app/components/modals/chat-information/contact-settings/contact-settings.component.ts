import { Component, Input, OnInit } from '@angular/core';

import { RequestsService } from '../../../../services/requests/requests.service';
import { BusService } from '../../../../services/bus/bus.service';

import { SHOW_CHAT_ICON } from '../../../../actions/main.action';

@Component({
  selector: 'app-contact-settings',
  templateUrl: './contact-settings.template.html',
  styleUrls: ['./contact-settings.style.scss']
})
export class ContactSettingsComponent implements OnInit {

  @Input() contactId: string;
  @Input() username: string;

  public isContact = false;

  constructor(
    private api: RequestsService,
    private bus: BusService
  ) { }

  public ngOnInit(): void {
    this.api.get({url: `/contacts/${this.contactId}`})
      .subscribe(
        res => {
          this.isContact = res.data;
          this.bus.publish(SHOW_CHAT_ICON, res.data);
        }
      );
  }

  public addContact(): void {
    this.api.post({url: `/contacts/${this.username}`, body: {}})
      .subscribe(
        () => {
          this.isContact = true;
          this.bus.publish(SHOW_CHAT_ICON, true);
        }
      );
  }

  public deleteContact(): void {
    this.api.delete({url: `/contacts/${this.contactId}`})
      .subscribe(
        () => {
          this.isContact = false;
          this.bus.publish(SHOW_CHAT_ICON, false);
        }
      );
  }

}
