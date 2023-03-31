import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";
import {VoyageService} from "../shared/Service/voyage.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  id !: any;
  psw !: any;
  role !: any;
  name!:any;
  listUser : any;
  u : any;
  listVoyage2:any;
  listVm:any;
  namesss:any;
  names:any;
  constructor(private voyageService : VoyageService,private userService :UserService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.psw = params.get('password');
      this.role = params.get('role');
    });
    this.GetvoyageVm(this.id);
    console.log(this.listVoyage2);
    this.getNamesss();
  }

  async getNamesss(){
    await new Promise((resolve)=>{setTimeout(resolve,500);});
    console.log(this.listVoyage2);
    console.log("aaaaa");
    this.namesss=[];

    for (var i =0;i<this.listVoyage2.length;i++){
      console.log(this.listVoyage2.length);
      this.getNamess(this.listVoyage2[i].idVoyage);
      console.log(this.listVoyage2[i].idVoyage);
    }

    console.log("fin");
    this.getAllNotification(this.id);
  }
  async getNamess(id:any){
    console.log(id);
    this.voyageService.getNames(id).subscribe(res => this.namesss.push(res) );
  }
  getAllNotification(id:any){
    this.voyageService.getAllNotification(id).subscribe(res => this.listVm = res );
  }
  async GetvoyageVm(id:any){
    this.voyageService.GetvoyageVm(id).subscribe(res => this.listVoyage2 = res );
    await new Promise((resolve)=>{setTimeout(resolve,200);});
    console.log(this.listVoyage2);
  }
  invitationaccepter(idvm: any){
    console.log(this.listVm);
    this.voyageService.invitationaccepter(idvm).subscribe(() => {
      this.getAllNotification(this.id);

    });
  }
  deleteInvitationi(idvm : any){
    this.voyageService.deleteInvitation(idvm).subscribe(res => this.listVm=res)
  }
}
