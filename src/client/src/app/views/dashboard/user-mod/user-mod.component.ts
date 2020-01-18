import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneratePasswordPopupComponent } from '@shared/components';
import { User } from '@core/models';
import { NGXLogger } from 'ngx-logger';
import { NgForm } from '@angular/forms';
import { UserService } from '@core/services';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '@core/services/mail.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  userId = '';
  user: User;
  mailValid = false;
  check = false;
  changedPassword = false;

  constructor(
    private modalService: NgbModal,
    private logger: NGXLogger,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private mailService: MailService
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
        this.changedPassword = true;
      })
      .catch(err => console.error(err));
  }

  onCreateUserClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.mailService.sendMail(
      this.user.mail, 'Nowe hasło', this.user.password).pipe(
        mergeMap(_ => {
          return this.userService.addUser(this.user);
        })
      ).subscribe(
        res => {
          form.resetForm();
          console.log(res);
        },
        err => console.error(err)
      );
  }

  onEditUserClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    if (this.changedPassword) {
      this.mailService.sendMail(
        this.user.mail, 'Nowe hasło', this.user.password)
          .subscribe(res => console.log(res));
    }
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
      this.check = true;
    });
  }

  onSubmit(form: NgForm): void {
    if (!this.userId) {
      this.onCreateUserClick(form);
      return;
    }
    this.onEditUserClick(form);
  }

}
