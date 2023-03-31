import { Component, OnInit } from '@angular/core';
import {TchatService} from "../shared/Service/tchat.service";
import {ActivatedRoute} from "@angular/router";
import {BoitActuel, Message} from "../shared/Model/tchat"
import {FormGroup} from "@angular/forms";
import {Subscription, timer} from "rxjs";
import {map} from "rxjs/operators";
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {
  id !: any;
  BoitUser : any;
  idUser : any;
  idUserMsg : any;
  amis : any;
  active :any ;
  numeroFriend : number=1;
  listMsg : any;
  IdUserClicked : any;
  idBoitClicked :any;
  boitActuel!:BoitActuel;
  nameUserActuel:any;
  IdUserDefault :any;
  message='';
  m!:Message;
  timeer!:Subscription;
  timeer2!:Subscription;
  mydate:any;
  lastMsgBoit:any;
  role:any;
  psw:any;
  constructor(private tchatService :TchatService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.psw = params.get('password');
      this.role = params.get('role');
    });

    this.timeer2=timer(0,2000).pipe(map(()=>{this.AllBoitUser(this.id)})).subscribe();

    this.m={
      text:null,
      employee_envoye:null,
      date_denvoye:null
    }


  }
  lastMsgBoitCopy:any;
  async AllBoitUser(id : any){
    this.tchatService.AllBoitUser(id).subscribe(res => this.BoitUser = res  );
    await new Promise((resolve)=>{setTimeout(resolve,100);});
    this.IdUserDefault=this.BoitUser;
    this.lastMsgBoitCopy=[];
    for (var u =0;u< this.BoitUser.length;u++){

      this.LastMessage(this.BoitUser[u].idBoit_tchat);
      await new Promise((resolve)=>{setTimeout(resolve,5);});
    }
    this.lastMsgBoit=this.lastMsgBoitCopy
    this.AllAmis(this.id);
  }
  Userbyid(b : any){
    return this.tchatService.Userbyid(b).subscribe(res => this.idUser = res );
  }
  async AllAmis(id : any){
    this.tchatService.AllAmis(id).subscribe(res => this.amis = res);
  }
  GetBoitId(id:any){
    this.tchatService.GetBoitId(this.id,id).subscribe(res => this.idBoitClicked = res );
  }
  LastMessage(id:any){
    this.tchatService.LastMessage(id).subscribe(res => this.lastMsgBoitCopy.push(res) );
  }
  async functionn() {
    //this.listDate=[];
    this.message="";
    this.GetBoitId(this.IdUserClicked);
    await new Promise((resolve)=>{setTimeout(resolve,100);});
    this.timeer=timer(0,2000).pipe(map(()=>{this.AllMessageTwoAmis(this.idBoitClicked)})).subscribe();
  }
  listDate:string[]=[];
  daate:any;
  daateActuel:any;
  async AllMessageTwoAmis(id : any){
    //this.listDate=[];
    this.Userbyid(this.IdUserClicked);
    this.tchatService.AllMessageTwoAmis(id).subscribe(res => this.listMsg = res );
    await new Promise((resolve)=>{setTimeout(resolve,100);});
    this.listDate=[];
    for (let m in this.listMsg){
      this.daateActuel=new Date();
      this.daate=new Date(this.listMsg[m].date_denvoye);
      if (this.daate.getFullYear()-this.daateActuel.getFullYear()==0){
        if (this.daate.getMonth()-this.daateActuel.getMonth()==0){
          if (this.daate.getDay()-this.daateActuel.getDay()==0){
            if (this.daate.getHours()-this.daateActuel.getHours()==0){
              if (this.daate.getMinutes()-this.daateActuel.getMinutes()==0) {
                this.listDate.push(this.daateActuel.getSeconds() - this.daate.getSeconds() + " seconds");
              }
              else{
                this.listDate.push(this.daateActuel.getMinutes() - this.daate.getMinutes() + " minutes");
              }
            }
            else{
              this.listDate.push(this.daateActuel.getHours() - this.daate.getHours() + " hours");
            }
          }
          else{
            this.listDate.push(this.daateActuel.getDay() - this.daate.getDay() + " days");
          }
        }
        else{
          this.listDate.push(this.daateActuel.getMonth() - this.daate.getMonth() + " months");
        }
      }
      else{
        this.listDate.push(this.daateActuel.getFullYear() - this.daate.getFullYear() + "years");
      }

    }
    this.nameUserActuel=this.idUser.name;

  }
  datepipe:any;
  AddMessage (){
    this.m.text=this.message;
    this.m.employee_envoye=this.id;

    this.mydate=new Date();
    this.datepipe=new DatePipe('en-US');

    this.m.date_denvoye=this.mydate;
    this.tchatService.AddMessage(this.idBoitClicked,this.m).subscribe(res=>this.AllMessageTwoAmis(this.idBoitClicked));
    this.message="";
  }

}

