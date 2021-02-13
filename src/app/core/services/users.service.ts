import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Administrator } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   *
   */
  private usersCollections: AngularFirestoreCollection<Administrator>;
  users: Observable<Administrator[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollections = afs.collection<Administrator>('users');
    this.users = this.usersCollections.valueChanges();
  }

  add(user: Administrator): Promise<void> {
    return this.usersCollections.doc(user.getUid()).set(user);
  }

  getUsers(): Observable<Administrator[]> {
    return this.users;
  }
}
