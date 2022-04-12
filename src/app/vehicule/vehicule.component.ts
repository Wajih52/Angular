import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  c='blue';
  b='envoyer';
  etat=false;
  x:number=100;
  msg:string='';
  id='slt';
  person :any={nom:'Sara',prenom:'Alouane',age:18}
  hideDiv =false;

  getEmail(){
    return this.person.nom+'@gmail.com';
  }

  message(){
    this.x=0;
    this.hideDiv=true;
    return this.msg='hello world';
  }

  changeCol(cc:any){
    this.c=cc;
  }

}
