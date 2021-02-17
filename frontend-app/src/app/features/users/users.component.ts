import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(UserListComponent) userRef!: UserListComponent;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewUser() {
    console.log('add new user');

    const dialogRef = this.dialog.open(NewUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.userRef.getUsers();
    });
  }

}
