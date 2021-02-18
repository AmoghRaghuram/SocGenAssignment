import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { UsersComponent } from '../users.component';
import * as uuid from 'uuid';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: any;

  constructor(private _fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UsersComponent>) { }

  ngOnInit(): void {
    /**
     * Initializing new form
     */
    this.userForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [],
      gender: ['', Validators.required],
      department: ['', Validators.required]
    })
  }

/**
 * Adds a new user
 */
  addNewUser() {
    console.log('form data', this.userForm.value);

    /**
     * Generating a new key for each entry
     */
    let uniqueKey = uuid.v4();

    /**
     * Creating user obj to save
     */
    let userObj = {
      id: uniqueKey,
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      gender: this.userForm.get('gender').value,
      dateOfBirth: this.userForm.get('dateOfBirth').value,
      department: this.userForm.get('department').value
    } as User;

    /**
     * Saving new user
     */
    this.userService.saveUser(userObj)
    .subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
    },
    (err) => {
      console.log('Failed to save new user!', err);
    })
  }
}
