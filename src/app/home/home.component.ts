
import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id !: any;
  psw !: any;
  role !: any;
  name!:any;
  listUser : any;
  u : any;

  constructor(private userService :UserService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.id+this.psw+this.role);
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.psw = params.get('password');
      this.role = params.get('role');
    });
    console.log(this.id+this.psw+this.role);
    this.getAll();

  }
  getAll(){
    this.userService.getAll().subscribe(res => this.listUser = res );
  }
  Connecter(id:any,a:any){
    this.userService.Connecter(id,a).subscribe(res=>console.log("aaa222"));
  }
}
