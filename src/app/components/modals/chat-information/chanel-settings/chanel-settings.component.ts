import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chanel-settings',
  templateUrl: './chanel-settings.template.html',
  styleUrls: ['./chanel-settings.style.scss']
})
export class ChanelSettingsComponent implements OnInit {

  @Input() editChat: boolean;
  @Input() description: string;
  @Input() chatUsers: any;

  constructor() { }

  public ngOnInit() {
  }

  public leaveChannel() {

  }

}
