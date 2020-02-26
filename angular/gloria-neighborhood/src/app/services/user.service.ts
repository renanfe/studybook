import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gloriaApi } from '../../environments/environment';
import { first } from 'rxjs/operators';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    this.http.post(`${gloriaApi.path}/api`, user)
      .pipe(first())
      .subscribe();
  }
}
