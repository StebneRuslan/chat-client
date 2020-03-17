import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.template.html',
  styleUrls: ['./modal-header.style.scss']
})
export class ModalHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() closeDialog = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {}

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
