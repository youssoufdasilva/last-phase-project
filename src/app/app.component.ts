import { Component } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(firestore: AngularFirestore) {}
  title = "last-phase-project";
}
