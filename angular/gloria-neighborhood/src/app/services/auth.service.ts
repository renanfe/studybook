import { Injectable } from '@angular/core';
import users from '../data/users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUser(username: String, password: String): Promise<any>{
    return new Promise((resolve, reject) => {
      let user = users.find(user => user.username === username );     
      user ? (user.password == password ? resolve(user) : reject('Incorect password')) : reject('Incorrect Username')
    });
  }
}
