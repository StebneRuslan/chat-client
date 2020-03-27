import { Component, Input, OnInit } from '@angular/core';

import { RequestsService } from '../../../../services/requests/requests.service';

@Component({
  selector: 'app-contact-settings',
  templateUrl: './contact-settings.template.html',
  styleUrls: ['./contact-settings.style.scss']
})
export class ContactSettingsComponent implements OnInit {

  @Input() contactId: string;
  @Input() username: string;

  public isContact = false;

  constructor(private api: RequestsService) { }

  public ngOnInit() {
    this.api.get({url: `/contacts/${this.contactId}`})
      .subscribe(
        res => this.isContact = res.data
      );
  }

  public addContact() {
    this.api.post({url: `/contacts/${this.username}`, body: {}})
      .subscribe(
        () => this.isContact = true
      );
  }

  // TODO: think about chat history and redirecting after delete
  public deleteContact() {
    this.api.delete({url: `/contacts/${this.contactId}`})
      .subscribe(
        res => console.log('Delete', res)
      );
  }

  public clearHistory() {

  }

}
