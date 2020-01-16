import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore
  ) {
    this.userCollection = this.db.collection('users');
  }

  getUsers(): Observable<any> {
    return this.userCollection.valueChanges();
  }

  getUserById(id: string): Observable<any> {
    return this.userCollection.doc(id).valueChanges();
  }

  addUser(): Observable<any> {
    return from(this.userCollection.add({ test: 'test' }))
      .pipe(
        switchMap(_ => {
          _.update('id', _.id);
          return of(_.id);
        })
      );
  }

  updateUser(user: any): Observable<any> {
    return from(this.userCollection.doc(user.id).update({test: 'test2'}));
  }

  deleteUser(id: string): Observable<any> {
    return from(this.userCollection.doc(id).delete());
  }
}
