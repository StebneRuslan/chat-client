import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.template.html',
  styleUrls: ['./chat-preview.style.scss']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat;

  constructor() { }

  public ngOnInit(): void {}

}
