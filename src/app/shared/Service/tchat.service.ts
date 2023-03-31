import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TchatService {

  readonly API_URL = 'http://localhost:8088/SpringMVC';


  constructor(private httpClient: HttpClient) { }

  AllBoitUser(id : any) {
    return this.httpClient.get(`${this.API_URL}/AllBoitUser/${id}`)
  }
  Userbyid(id : any){
    return this.httpClient.get(`${this.API_URL}/Userbyid/${id}`)
  }
  AllAmis(id : any){
    return this.httpClient.get(`${this.API_URL}/AllAmis/${id}`)
  }
  AllMessageTwoAmis(id : any){
    return this.httpClient.get(`${this.API_URL}/AllMessageTwoAmis/${id}`)
  }
  GetBoitId(id1:any,id2:any){
    return this.httpClient.get(`${this.API_URL}/BoitIdUsers/${id1}_${id2}`)
  }
  AddMessage(id : any,m:any){
    return this.httpClient.put(`${this.API_URL}/addMessageToBoit/${id}`,m);
  }
  LastMessage(id : any){
    return this.httpClient.get(`${this.API_URL}/LastMessage/${id}`);
  }
}
