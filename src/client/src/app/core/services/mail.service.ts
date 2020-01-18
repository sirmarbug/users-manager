import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  sendMail(to: string, subject: string, text: string): Observable<any> {
    return from(this.http.post(environment.mailApi, {
      to,
      subject,
      text
    }));
  }
}
