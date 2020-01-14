import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '@shared/components';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  page = 1;
  pageSize = 5;

  users = [
    {
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam@o2.pl',
      city: 'Kraków',
      country: 'Polska'
    }, {
      firstName: 'Kamil',
      lastName: 'Kozakowski',
      email: 'kamil@o2.pl',
      city: 'Warszawa',
      country: 'Polska'
    }
  ];

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onRemoveClick(): void {
    const modalRef = this.modalService.open(ConfirmPopupComponent);
  }

}
