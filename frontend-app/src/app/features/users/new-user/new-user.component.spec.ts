import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

import { NewUserComponent } from './new-user.component';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;
  let service: UserService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserComponent, MatDialogRef, MatDialog, MatDialogRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //New test
  it('should call service.saveUser', () => {
    spyOn(service, 'saveUser');
    component.addNewUser();
    expect(service.saveUser).toHaveBeenCalled();
  });
});
