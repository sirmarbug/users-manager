import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '@core/services';
import { User } from '@core/models';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

  password = '';
  passwordValid = true;
  userId = '';
  user: User = new User();
  weather = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private logger: NGXLogger,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId)
      .subscribe((res: User) => {
        this.logger.debug(res);
        this.user = res;
      });
  }

  onCheckPassword(): void {
    this.userService.login(this.userService.currentUser.mail, this.password)
      .subscribe(
        res => {
          if (!res) {
            this.passwordValid = false;
            return;
          }
          this.logger.debug('login', res);
          this.passwordValid = true;
          this.weather = true;
        },
        err => {
          this.logger.error(err);
          this.weather = false;
          this.passwordValid = false;
        }
      );
  }

}
