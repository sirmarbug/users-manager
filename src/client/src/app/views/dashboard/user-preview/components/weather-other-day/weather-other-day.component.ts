import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@core/models';
import { DaysWeekConvert } from '@core/utils/days-week-convert';

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

  convertDay(value: string): string {
    return DaysWeekConvert.toPL(value);
  }

}
