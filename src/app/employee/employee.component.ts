import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id !: any;
  psw !: any;
  role !: any;
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

  }

}
