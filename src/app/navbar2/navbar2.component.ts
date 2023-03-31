import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  id !: any;
  psw !: any;
  role !: any;
  name!:any;
  listUser : any;
  u : any;
  constructor(private userService :UserService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.psw = params.get('password');
      this.role = params.get('role');
    });
  }

}
