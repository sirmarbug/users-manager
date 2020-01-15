import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

  password = '';
  passwordValid = true;

  constructor() { }

  ngOnInit() {
  }

  onCheckPassword(): void {
    this.passwordValid = !this.passwordValid;
  }

}
