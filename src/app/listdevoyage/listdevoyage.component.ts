import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/Service/user.service";
import {ActivatedRoute} from "@angular/router";
import {VoyageService} from "../shared/Service/voyage.service";
import {EmployeeComponent} from "../employee/employee.component";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Voyage} from "../shared/Model/voyage";
import {Vm} from "../shared/Model/Vm";

@Component({
  selector: 'app-listdevoyage',
  templateUrl: './listdevoyage.component.html',
  styleUrls: ['./listdevoyage.component.css']
})
export class ListdevoyageComponent implements OnInit {
id:any;
idEmployee:any;
  listVoyage:any;
  form : boolean = false;
  closeResult! : string;
  listVoyageMatching:any;
  distnation:any;
  voyageClicked:any;
  names:any;
  matches:any;
  vm!:Vm;
  idVoyageClicked:any;
  constructor(private voyageService :VoyageService, private modalService: NgbModal,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.idEmployee = params.get('idemployee');
    });
    this.Voyagebyid();
    this.vm={
      em1:null,
      em2:null,
      EntrepriseR:null,
      Idvoyage2:null,
      Idvoyage1:null
    }
  }

  Voyagebyid(){
    this.voyageService.getAll(this.idEmployee).subscribe(res => this.listVoyage = res );
  }

  FindVoyage(id:any){
    this.voyageService.FindVoyage(id).subscribe(res => this.voyageClicked = res );
  }

  async getfindbydistnation(idVoyage:any){
    //this.FindVoyage(idVoyage);
    this.idVoyageClicked=idVoyage;
    this.listVoyageMatching=[]
    this.voyageService.getfindbydistnation(idVoyage).subscribe(res => this.listVoyageMatching = res );
    await new Promise((resolve)=>{setTimeout(resolve,200);});
    this.names=[];
    this.matches=[];
    for (var i=0;i<this.listVoyageMatching.length ;i++ ){

      this.getNames(this.listVoyageMatching[i].idVoyage);
      this.getMatches(this.listVoyageMatching[i].idVoyage,idVoyage);
    }
    await new Promise((resolve)=>{setTimeout(resolve,500);});
    console.log(this.names.length+" "+this.names.length+" "+this.listVoyageMatching.length )
    console.log(this.names);
    console.log(this.matches);
  }



  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' ,windowClass:'custom-class'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  cancel(){
    this.form = false;
  }


  getNames(idVoyage:any){
    this.voyageService.getNames(idVoyage).subscribe(res => this.names.push(res) );
  }
  getMatches(idVoyage:any,idVoyage2:any){
    this.voyageService.getMatches(idVoyage,idVoyage2).subscribe(res => this.matches.push(res));
  }

  Userr:any;
  async GetUserId(id:any){
    this.voyageService.GetUserId(id).subscribe(res => this.Userr=res );
    await new Promise((resolve)=>{setTimeout(resolve,50);});
  }
  t:any;
  test(i:any){
    this.t=this.matches[i].findIndex(function (element:any) {
      return element >=1;
    });
    console.log(this.t)
  }

  ajouterInvitationEtAffecterEntreprise(idVoyage:any,idUser:any,i:any){
    //let idEmp = this.selectedItem();
    this.vm.em1=Number(this.idEmployee);
    this.vm.em2=Number(this.names[i][3]);
    this.GetUserId(Number(this.names[i][2]));
    this.vm.EntrepriseR=Number(this.names[i][2]);

    console.log(this.vm);
    this.voyageService.ajouterInvitationEtAffecterEntreprise(idVoyage,this.idVoyageClicked,this.vm.EntrepriseR,this.vm).subscribe();
  }
}
