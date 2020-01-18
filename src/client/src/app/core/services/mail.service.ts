import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  sendMail(to: string, subject: string, text: string): Observable<any> {
    return from(this.http.post('http://localhost:3000/sendMail', {
      to,
      subject,
      text
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }));
  }
}
