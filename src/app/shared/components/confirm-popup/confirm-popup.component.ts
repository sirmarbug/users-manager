import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  onConfirmClick() {
    this.activeModal.close(true);
  }

}
