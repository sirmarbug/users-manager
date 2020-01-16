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
  user: User;

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
    this.passwordValid = !this.passwordValid;
  }

}
