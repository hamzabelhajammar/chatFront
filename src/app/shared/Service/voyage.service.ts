import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  readonly API_URL = 'http://localhost:8088/SpringMVC';

  constructor(private httpClient: HttpClient) { }

  getAll(id:any) {
    return this.httpClient.get(`${this.API_URL}/Voyagebyid/${id}`)
  }
  add(id : any,voyage:any) {
  //  let idUser = this.userService.getCurrentUser().getId();
    let idEntrepriseConnecté = 1;
    return this.httpClient.post(`${this.API_URL}/ajouterVoyageEtAffecterEmployee/${id}`, voyage)
  }
  edit(voyage : any){
    return this.httpClient.put(`${this.API_URL}/updateVoyage`, voyage)
  }
  delete(idvoyagee : any){
    return  this.httpClient.delete(`${this.API_URL}/deletvoyage/${idvoyagee}`)
  }
  getfindbydistnation(idVoyage:any) {
    return this.httpClient.get(`${this.API_URL}/getfindbydistnation/${idVoyage}`)
  }
  getNames(id:any) {
    return this.httpClient.get(`${this.API_URL}/GetNames/${id}`)
  }
  FindVoyage(id:any) {
    return this.httpClient.get(`${this.API_URL}/FindVoyage/${id}`)
  }
  ajouterInvitationEtAffecterEntreprise(idvoyage:any,idVoyageClicked:any,id:any,vm:any){
    return this.httpClient.post(`${this.API_URL}/ajouterInvitationEtAffecterEntreprise/${idvoyage}_${idVoyageClicked}/${id}`,vm)
  }
  GetUserId(id:any){
    return this.httpClient.get(`${this.API_URL}/GetUserId/${id}`)
  }
  getMatches(id1:any,id2:any) {
    return this.httpClient.get(`${this.API_URL}/GetMatches/${id1}_${id2}`)
  }

  getAllNotification(id:any) {
    return this.httpClient.get(`${this.API_URL}/GetVmUser/${id}`)
  }
  invitationaccepter(id:any) {

    return this.httpClient.get(`${this.API_URL}/AcceptVm/${id}`);
  }
  deleteInvitation(idvm : any){
    return  this.httpClient.delete(`${this.API_URL}/RefuserVm/${idvm}`);
  }

  GetvoyageVm(id:any){
    return  this.httpClient.get(`${this.API_URL}/GetvoyageVm/${id}`);
  }
}
