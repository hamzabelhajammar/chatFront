import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {voyageComponent} from './voyage/voyage.component';
import { FormsModule } from '@angular/forms';
import {  NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { TchatComponent } from './tchat/tchat.component';
import { ListdeemployeeComponent } from './listdeemployee/listdeemployee.component';
import { ListdevoyagesimilaireComponent } from './listdevoyagesimilaire/listdevoyagesimilaire.component';
import { ListdevoyageComponent } from './listdevoyage/listdevoyage.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactComponent } from './contact/contact.component';
import { VideotchatComponent } from './videotchat/videotchat.component';

@NgModule({
  declarations: [
    AppComponent,
    voyageComponent,
    UserComponent,
    HomeComponent,
    EmployeeComponent,
    Navbar1Component,
    Navbar2Component,
    TchatComponent,
    ListdeemployeeComponent,
    ListdevoyagesimilaireComponent,
    ListdevoyageComponent,
    FooterComponent,
    NotificationComponent,
    ContactComponent,
    VideotchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
