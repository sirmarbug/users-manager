import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneratePasswordPopupComponent } from '@shared/components';
import { User } from '@core/models';
import { NGXLogger } from 'ngx-logger';
import { NgForm } from '@angular/forms';
import { UserService } from '@core/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  userId = '';
  user: User;
  mailValid = false;

  constructor(
    private modalService: NgbModal,
    private logger: NGXLogger,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = new User();
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    }
  }

  onGeneratePasswordClick(): void {
    const modalRef = this.modalService.open(GeneratePasswordPopupComponent);
    modalRef.result
      .then(res => {
        if (!res) {
          return;
        }
        this.user.password = res;
        this.user.repeatPassword = res;
      })
      .catch(err => console.error(err));
  }

  onCreateUserClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.logger.debug(this.user);
    this.userService.addUser(this.user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
  }

  onEditUserClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.logger.debug(this.user);
    this.userService.updateUser(this.user)
      .subscribe(() => {},
        err => console.error(err)
      );
  }

  onCheckMail(): void {
    if (this.userId) {
      return;
    }
    this.userService.checkMail(this.user.mail).subscribe((valid: boolean) => {
      this.mailValid = valid;
    });
  }

  onSubmit(form: NgForm): void {
    if (!this.userId) {
      this.onCreateUserClick(form);
    }
    this.onEditUserClick(form);
  }

}
