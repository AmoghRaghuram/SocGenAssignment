import { TestBed } from '@angular/core/testing';
import { User } from '../models/user.model';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService,
      httpTestingController: HttpTestingController,
      expectedUsers: User[]

  beforeEach(() => {

    expectedUsers = [
      {
        id: '',
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        gender: '',
        department: '' 
      }
    ] as User[];

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('get a list of users', () => {
    service.getUsers()
    .subscribe((users) => {
      expect(users).toEqual(expectedUsers, 'should return expected users'),
      fail
    })
  });

  it('save a new user', () => {
    service.saveUser(expectedUsers[0])
    .subscribe((response) => {
      expect(response).toEqual('user added'),
      fail
    })
  });
});
