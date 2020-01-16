import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { User } from '@core/models';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<any>;
  private session: User = new User();

  get currentUser(): User {
    return this.session;
  }

  constructor(
    private db: AngularFirestore,
    private logger: NGXLogger,
  ) {
    this.userCollection = this.db.collection('users');
  }

  login(mail: string, password: string): Observable<boolean> {
    return this.db.collection('users', ref => ref.where('mail', '==', mail).where('password', '==', password))
    .valueChanges().pipe(map((_: User[]) => {
      if (_.length < 1) {
        return false;
      }
      this.logger.debug('Session:', _[0]);
      this.session = _[0];
      return true;
    }));
  }

  checkMail(mail: string): Observable<boolean> {
    return this.db.collection('users', ref => ref.where('mail', '==', mail)).valueChanges().pipe(map((_: User[]) => {
      if (_.length < 1) {
        return true;
      }
      return false;
    }));
  }

  getUsers(): Observable<User[]> {
    return this.userCollection.valueChanges();
  }

  getUserById(id: string): Observable<User> {
    return this.userCollection.doc(id).valueChanges().pipe(map((res: User) => res));
  }

  addUser(user: User): Observable<any> {
    const newUser = { ...user };
    delete newUser.id;
    return from(this.userCollection.add(newUser))
      .pipe(
        switchMap(_ => {
          _.update('id', _.id);
          return of(_.id);
        })
      );
  }

  updateUser(user: any): Observable<void> {
    return from(this.userCollection.doc(user.id).update(user));
  }

  deleteUser(id: string): Observable<void> {
    return from(this.userCollection.doc(id).delete());
  }
}
