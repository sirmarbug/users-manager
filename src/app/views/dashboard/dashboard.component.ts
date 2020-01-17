import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@core/services';
import { User, Role } from '@core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;

  get name(): string {
    return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  goToAddUser(): void {
    this.router.navigateByUrl('dashboard/user-create');
  }

  goToUserPreview(): void {
    this.router.navigateByUrl(`dashboard/user-preview/${this.currentUser.id}`);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('auth/login');
  }

  isAdmin(): boolean {
    if (this.currentUser.role !== Role.ADMIN) {
      return false;
    }
    return true;
  }

  isRoute(url: string): boolean {
    if (this.router.url !== url) {
      return false;
    }
    return true;
  }

}
