import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.router.navigateByUrl('dashboard/home');
  }

}
