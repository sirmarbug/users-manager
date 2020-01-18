import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '@shared/components';
import { UserService } from '@core/services';
import { NGXLogger } from 'ngx-logger';
import { User } from '@core/models';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private logger: NGXLogger,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.logger.debug(users);
      this.users = users;
    });
  }

  onRemoveClick(id: string): void {
    const modalRef = this.modalService.open(ConfirmPopupComponent);
    modalRef.result.then(
      res => {
        if (!res) {
          return;
        }
        this.userService.deleteUser(id).subscribe(
          () => {
            this.toastr.success('Użytkownik został usunięty');
          },
          err => this.toastr.error('Coś poszło nie tak')
        );
      }
    );
  }

  onEditClick(id: string): void {
    this.router.navigateByUrl(`dashboard/user-edit/${id}`);
  }

  onPreviewClick(id: string): void {
    this.router.navigateByUrl(`dashboard/user-preview/${id}`);
  }

}
