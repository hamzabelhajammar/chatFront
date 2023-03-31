import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = 'http://localhost:8088/SpringMVC';


  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${this.API_URL}/AllUser`);
  }
  Connecter(id:any,a:any) {
    return this.httpClient.put(`${this.API_URL}/Connecter/${id}/${a}`,5);
  }
  getAllEmployee(id:any) {
    return this.httpClient.get(`${this.API_URL}/Employeebyiduser/${id}`);
  }


}
