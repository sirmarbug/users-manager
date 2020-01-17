import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  @Input() city: string;
  @Input() temp: string;
  @Input() humidity: string;

  constructor() { }

  ngOnInit() {
  }

}
