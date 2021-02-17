import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers: User[] = [];
  dataSource: any[] = [];
  displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'department'];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe((userData) => {
      console.log('user data', userData);
      this.allUsers = userData;
      this.dataSource = userData;
    },
    (err) => console.log('Failed to get users', err));
  }

}
