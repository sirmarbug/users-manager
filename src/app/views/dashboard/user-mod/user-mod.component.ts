import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneratePasswordPopupComponent } from '@shared/components';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onGeneratePasswordClick(): void {
    const modalRef = this.modalService.open(GeneratePasswordPopupComponent);
  }

}
