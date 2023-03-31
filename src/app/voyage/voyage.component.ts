import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Voyage} from "../shared/Model/voyage";
import {ActivatedRoute} from "@angular/router";
import {VoyageService} from "../shared/Service/voyage.service";
import {formattedError} from "@angular/compiler";



@Component({
  selector: 'app-products',
  templateUrl: './voyage.component.html',
  styleUrls: ['./voyage.component.css']
})
export class voyageComponent implements OnInit {
  id !: any;
  listVoyage : any;
  form : boolean = false;
   voyage!: Voyage;
   closeResult! : string;

  constructor(private voyageService : VoyageService, private modalService: NgbModal,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
    this.id = params.get('id');
  });
    this.getAll(this.id);

    this.voyage = {
      id:null,
      idVoyage: null,
      distnation: null,
      duree: null,
      discription:null,
      date:null,
      objet_de_voyage :null

    }
  }

  getAll(id:any){
    this.voyageService.getAll(id).subscribe(res => this.listVoyage = res );
  }

  addVoyage(p: any){
    //let idEmp = this.selectedItem();
    this.voyageService.add(this.id,p).subscribe(() => {
      this.getAll(this.id);
      this.form = false;
    });
  }

  edit(voyage : Voyage){
    this.voyageService.edit(voyage).subscribe();
  }
  delete(IdVoyage : any){
    this.voyageService.delete(IdVoyage).subscribe(() => this.getAll(this.id))
  }
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
