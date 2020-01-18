import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { ApiBuilder } from '@core/utils/api-builder';
import { Observable } from 'rxjs';
import { YahooResponse } from '@core/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) { }

  getWeather(location: string): Observable<YahooResponse> {
    const loc = location.toLowerCase();
    return this.http.get('https://weather-ydn-yql.media.yahoo.com/forecastrss', {
      headers: new HttpHeaders()
        .set('Authorization', ApiBuilder.yahooHeader(loc))
        .set('X-Yahoo-App-Id', 'SwUYiS32'),
      params: new HttpParams()
        .set('location', loc)
        .set('format', 'json')
        .set('u', 'C')
    }).pipe(map((_: YahooResponse) => _));
  }
}
