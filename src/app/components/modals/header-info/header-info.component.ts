import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditNameComponent } from '../edit-name/edit-name.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.template.html',
  styleUrls: ['./header-info.style.scss']
})
export class HeaderInfoComponent implements OnInit {

  @Input() name: string;

  private fr: FileReader;
  public imageSrc: string | ArrayBuffer;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {}

  public selectImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.fr = new FileReader();
      this.fr.onload = () => this.imageSrc = this.fr.result;
      this.fr.readAsDataURL(file);
    }
  }

  public openEditTitleWindow(): void {
    this.dialog.open(EditNameComponent, {
      width: '450px',
      data: {
        oldTitle: this.name,
        nameType: 'profile'
      }
    });
  }
}
