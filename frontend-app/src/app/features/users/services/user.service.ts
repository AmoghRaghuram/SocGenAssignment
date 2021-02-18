import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * User Service to access user data
 */
export class UserService {

  baseUrl = 'http://localhost:3080/api'

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl + '/users')
    .pipe(
      map((data: any) => data)
    )
  }

  /**
   * @param userData User
   */
  saveUser(userData: User) {
    return this.http.post(this.baseUrl + '/user', userData);
  }
}
