import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '@core/services';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail = '';
  password = '';
  error = false;

  constructor(
    private router: Router,
    private logger: NGXLogger,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.userService.login(this.mail, this.password)
      .subscribe(
        (user: boolean) => {
          if (!user) {
            this.error = true;
            return;
          }
          this.router.navigateByUrl('dashboard/home');
        },
        err => {
          this.logger.error(err);
          this.error = true;
        }
      );
  }

}
