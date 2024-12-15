import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private sharedService: SharedService) {
    this.enviarDados();
  }
  
  receitas: {tipo:string; valor:number; data: string}[]= 
  [{tipo: "Salário", valor: 5000, data: "01/12/2024"}];
  
  enviarDados() {
    this.sharedService.updateData(this.receitas);
  }
  ngOnInit(){
  
  }


}
