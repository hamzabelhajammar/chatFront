import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../shared/Service/user.service";

@Component({
  selector: 'app-listdeemployee',
  templateUrl: './listdeemployee.component.html',
  styleUrls: ['./listdeemployee.component.css']
})
export class ListdeemployeeComponent implements OnInit {
  id !: any;
  psw !: any;
  role !: any;
  name!:any;
  listemployee : any;
  u : any;
  constructor(private userService :UserService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.psw = params.get('password');
      this.role = params.get('role');
    });
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.userService.getAllEmployee(this.id).subscribe(res => this.listemployee = res );
  }

}
