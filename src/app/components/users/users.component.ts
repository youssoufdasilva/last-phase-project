import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  editState: boolean = false;
  userToEdit: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    if (this.users) {
      console.log("num of users = " + this.users.length);
    }
  }

  refresh() {
    this.userService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });
  }

  deleteUser(event, user: User) {
    this.clearState();
    this.userService.deleteUser(user);
  }

  editUser(event, user: User) {
    this.editState = true;
    this.userToEdit = user;
    console.log("editing");
  }

  updateUser(user: User) {
    // console.log("Updating user");
    this.userService.updateUser(user);
    this.clearState();
  }

  toggleUserActivity(user: User) {
    user.isActive = !user.isActive;
    this.updateUser(user);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.userToEdit = null;
  }
}
