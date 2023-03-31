import { Component } from '@angular/core';
import {UserService} from "./shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudtuto-Front';



  constructor() { }

  ngOnInit(): void {

  }
}
