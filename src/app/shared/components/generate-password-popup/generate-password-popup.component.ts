import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generate-password-popup',
  templateUrl: './generate-password-popup.component.html',
  styleUrls: ['./generate-password-popup.component.scss']
})
export class GeneratePasswordPopupComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
