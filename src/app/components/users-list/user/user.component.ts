import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.template.html',
  styleUrls: ['./user.style.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel;

  constructor() { }

  public ngOnInit() {}

}
