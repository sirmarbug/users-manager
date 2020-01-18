import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordGenerator } from '@core/utils/password-generator';

@Component({
  selector: 'app-generate-password-popup',
  templateUrl: './generate-password-popup.component.html',
  styleUrls: ['./generate-password-popup.component.scss']
})
export class GeneratePasswordPopupComponent implements OnInit {

  lengthPassword = 16;
  newPassword = '';
  charsRepeating = false;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  onPasswordGenerateClick() {
    if (!this.charsRepeating) {
      this.newPassword = PasswordGenerator.withoutRepeating(this.lengthPassword);
      return;
    }
    this.newPassword = PasswordGenerator.basic(this.lengthPassword);
  }

  onSave() {
    if (!this.newPassword) {
      return;
    }
    this.activeModal.close(this.newPassword);
  }

}
