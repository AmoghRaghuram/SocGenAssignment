import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //New test
  it('should call service.getUsers', () => {
    spyOn(service, 'getUsers');
    component.getUsers();
    expect(service.getUsers).toHaveBeenCalled();
  });

  it('list should contain objects of type User', () => {
    spyOn(service, 'getUsers');
    component.getUsers();
    expect(component.allUsers).toEqual([])
  });
});
