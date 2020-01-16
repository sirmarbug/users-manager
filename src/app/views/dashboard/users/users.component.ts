import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '@shared/components';
import { UserService } from '@core/services';
import { NGXLogger } from 'ngx-logger';
import { User } from '@core/models';

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
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.logger.debug(users);
      this.users = users;
    });
  }

  onRemoveClick(): void {
    const modalRef = this.modalService.open(ConfirmPopupComponent);
  }

}
