import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  user: User = {
    username: "",
    createdAt: null,
    isActive: null
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.username != "") {
      this.user.createdAt = new Date();
      this.user.isActive = true;

      this.userService.addUser(this.user);

      this.user.username = "";
      this.user.createdAt = null;
      this.user.isActive = null;
    }
  }
}
