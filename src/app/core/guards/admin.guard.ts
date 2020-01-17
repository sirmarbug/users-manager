import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@core/services';
import { Role } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private rouer: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean | UrlTree > | Promise < boolean | UrlTree > | boolean | UrlTree {
    if (this.userService.currentUser && this.userService.currentUser.id && this.userService.currentUser.role === Role.USER) {
      this.rouer.navigateByUrl('dashboard/home');
      return false;
    }
    return true;
  }
}
