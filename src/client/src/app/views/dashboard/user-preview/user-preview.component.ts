import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { UserService } from '@core/services';
import { User, YahooResponse, WeatherToday, Forecast } from '@core/models';
import { WeatherService } from '@core/services/weather.service';
import { mergeMap } from 'rxjs/operators';

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
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId)
      .subscribe((res: User) => {
        this.logger.debug(res);
        this.user = res;
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

}
