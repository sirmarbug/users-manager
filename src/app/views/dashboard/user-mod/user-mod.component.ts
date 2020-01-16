import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneratePasswordPopupComponent } from '@shared/components';
import { User } from '@core/models';
import { NGXLogger } from 'ngx-logger';
import { NgForm } from '@angular/forms';
import { UserService } from '@core/services';
import { WeatherService } from '@core/services/weather.service';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  user: User;

  constructor(
    private modalService: NgbModal,
    private logger: NGXLogger,
    private userService: UserService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.user = new User();
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
      })
      .catch(err => console.error(err));
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.logger.debug(this.user);
  }

}
