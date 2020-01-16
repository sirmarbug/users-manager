import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  role: string;
  name: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = `${this.userService.currentUser.firstName} ${this.userService.currentUser.lastName}`;
    this.role = this.userService.currentUser.role;
  }

  goToMyProfile() {
    this.router.navigateByUrl(`dashboard/user-preview/${this.userService.currentUser.id}`);
  }

}
