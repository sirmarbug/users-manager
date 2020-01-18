import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '@core/services';
import { User, YahooResponse, WeatherToday, Forecast } from '@core/models';
import { WeatherService } from '@core/services/weather.service';
import { mergeMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '@shared/components';
import { ToastrService } from 'ngx-toastr';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {

  password = '';
  passwordValid = true;
  userId = '';
  user: User = new User();
  weather = false;
  weatherToday: WeatherToday = new WeatherToday();
  forecasts: Forecast[] = new Array<Forecast>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private logger: NGXLogger,
    private userService: UserService,
    private weatherService: WeatherService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId)
      .subscribe((res: User) => {
        this.logger.debug(res);
        this.user = {...res};
      });
  }

  onCheckPassword(): void {

    this.userService.login(this.userService.currentUser.mail, this.password)
      .pipe(mergeMap(_ => {
        if (!_) {
          this.passwordValid = false;
          return;
        }
        this.logger.debug('login', _);
        this.passwordValid = true;
        return this.weatherService.getWeather(this.user.city);
      })).subscribe((res: YahooResponse) => {
        this.weatherToday = new WeatherToday(res.current_observation.condition.temperature, res.current_observation.atmosphere.humidity);
        this.forecasts = res.forecasts.slice(0, 3);
        this.weather = true;
      });
  }

  onEditClick(): void {
    this.router.navigateByUrl(`dashboard/user-edit/${this.user.id}`);
  }

  onRemoveClick(): void {
    const modalRef = this.modalService.open(ConfirmPopupComponent);
    modalRef.result.then(
      res => {
        if (!res) {
          return;
        }
        this.userService.deleteUser(this.user.id).subscribe(
          () => {
            this.router.navigateByUrl('dashboard/users');
            this.toastr.success('Użytkownik został usunięty');
          },
          err => this.toastr.error('Coś poszło nie tak')
        );
      }
    );
  }

  onPdfDownload(): void {
    const doc = new jsPDF();
    const userData = window.document.getElementById('user-data');
    const userWeather = window.document.getElementById('user-weather');
    html2canvas(userData).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      doc.addImage(img, 'PNG', 0, 0, 200, 100);
      html2canvas(userWeather).then((can) => {
        const img2 = can.toDataURL('image/png');
        doc.addImage(img2, 'PNG', 0, 100, 200, 100);
        doc.save(`${this.user.firstName}-${this.user.lastName}.pdf`);
    });
  });
  }
}
