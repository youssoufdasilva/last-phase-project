import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment.prod";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { UsersComponent } from "./components/users/users.component";

import { UserService } from "./services/user.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AddUserComponent } from "./components/add-user/add-user.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "last-phase-project"),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
