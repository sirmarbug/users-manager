import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@core/models';

@Component({
  selector: 'app-weather-other-day',
  templateUrl: './weather-other-day.component.html',
  styleUrls: ['./weather-other-day.component.scss']
})
export class WeatherOtherDayComponent implements OnInit {

  @Input() forecasts: Forecast[] = new Array<Forecast>();

  constructor() { }

  ngOnInit() {
  }

}
