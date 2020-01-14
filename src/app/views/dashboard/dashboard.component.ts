import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDashboard(): void {
    this.router.navigateByUrl('dashboard/home');
  }

  goToUsers(): void {
    this.router.navigateByUrl('dashboard/users');
  }

  goToAddUser(): void {
    this.router.navigateByUrl('dashboard/user-create');
  }

  goToUserPreview(): void {
    this.router.navigateByUrl('dashboard/user-preview');
  }

  logout(): void {
    this.router.navigateByUrl('auth/login');
  }

}
