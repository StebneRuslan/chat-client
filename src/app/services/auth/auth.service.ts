import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  private userId = '1';

  public getUserId(): string {
    return this.userId;
  }

  public setUserId(id): void {
    this.userId = id;
  }

  public loggedIn(): boolean {
    return this.cookieService.check('token');
  }

  public setToken(token): void {
    this.cookieService.set('token', token);
  }

  public logOut(): void {
    this.cookieService.delete('token');
  }

  public getToken(): any {
    return this.cookieService.get('token');
  }

}
