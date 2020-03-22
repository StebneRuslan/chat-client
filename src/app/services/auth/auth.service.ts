import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { RequestsService } from '../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialogRef: MatDialog,
    private cookieService: CookieService,
    private api: RequestsService
  ) { }

  private userId = '1';

  public setUserData(res: any): void {
    this.userId = res._id;
    this.cookieService.set('token', res.apiKey);
    this.router.navigate(['']);
  }

  public getUserId(): string {
    return this.userId;
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
    this.userId = '';
    this.cookieService.delete('token');
    this.dialogRef.closeAll();
    this.router.navigate(['/login']);
  }

}
