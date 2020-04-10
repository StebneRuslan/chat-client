import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { RequestsService } from '../requests/requests.service';
import { ChatService } from '../chat/chat.service';
import { SocketsService } from '../sockets/sockets.service';

import { ActiveUserModel } from '../../models/active-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialogRef: MatDialog,
    private cookieService: CookieService,
    private api: RequestsService,
    private chatService: ChatService,
    private socketsService: SocketsService
  ) { }

  public userData: ActiveUserModel = new ActiveUserModel();

  public setUserData(res: any): void {
    this.socketsService.initSocket(res._id);
    this.userData = new ActiveUserModel(res._id, res.username, res.avatar && res.avatar.url ? res.avatar.url : '');
    this.cookieService.set('token', res.apiKey);
    this.router.navigate(['']);
  }

  public getToken(): any {
    return this.cookieService.get('token');
  }

  public loggedIn(): boolean {
    return this.cookieService.check('token');
  }

  public logout(): void {
    this.api.get({url: '/users/logout'})
      .subscribe(
        () => this.clearUserData(),
        () => this.clearUserData()
      );
  }

  public clearUserData(): void {
    this.userData = null;
    this.chatService.activeChat = null;
    this.cookieService.delete('token');
    this.dialogRef.closeAll();
    this.router.navigate(['/login']);
  }

}
