import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { voyageComponent} from './voyage/voyage.component';
import { UserComponent} from './user/user.component';
import {HomeComponent} from "./home/home.component";
import {EmployeeComponent} from "./employee/employee.component";
import {TchatComponent} from "./tchat/tchat.component";
import {ListdevoyageComponent} from "./listdevoyage/listdevoyage.component";
import {ListdeemployeeComponent} from "./listdeemployee/listdeemployee.component";
import {NotificationComponent} from "./notification/notification.component";
import {ContactComponent} from "./contact/contact.component";
import {VideotchatComponent} from "./videotchat/videotchat.component";

const routes: Routes =[
  { path: 'home/:id/:password/1/tchat',  component: TchatComponent},
  { path: ':id/:password/1/tchat',  component: TchatComponent},
  {path: 'home', component: HomeComponent},
  {path: '',component: HomeComponent},
  {path: 'home/:id/:password/1/profil',component: voyageComponent},
  {path: 'home/:id/:password/0/:idemployee/listdevoyage',component: ListdevoyageComponent},
  {path: 'home/:id/:password/0/profil',component: ListdeemployeeComponent},
  {path: ':id/:password/1/profil',component: voyageComponent},
  {path: ':id/:password/0/:idemployee/listdevoyage',component: ListdevoyageComponent},
  {path: ':id/:password/0/profil',component: ListdeemployeeComponent},
  {path: ':id/:password/0/notification',component: NotificationComponent},
  {path: 'home/:id/:password/0/notification',component: NotificationComponent},
  {path: 'home/:id/:password/1/contact',component: ContactComponent},
  {path: ':id/:password/1/contact',component: ContactComponent},

  {path: 'home/:id/:password/1/videochat',component: VideotchatComponent},
  {path: ':id/:password/1/videochat',component: VideotchatComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
