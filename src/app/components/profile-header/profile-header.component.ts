import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.template.html',
  styleUrls: ['./profile-header.style.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Output() closeDialog = new EventEmitter();
  private fr: FileReader;
  public imageSrc: string | ArrayBuffer;
  constructor() {}

  public ngOnInit(): void {}

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = () => this.imageSrc = this.fr.result;
      this.fr.readAsDataURL(file);
    }
  }

  public closeProfile(): void {
    this.closeDialog.emit();
  }
}
