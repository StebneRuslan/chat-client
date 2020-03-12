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

  public loggedIn(): boolean {
    return this.cookieService.check('token');
  }

  public setToken(token): void {
    this.cookieService.set('token', token);
  }

  public getToken(): any {
    return this.cookieService.get('token');
  }

}
