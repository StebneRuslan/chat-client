import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
