import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private sharedService: SharedService) {  
    this.enviarDespesas();}
  despesas: {tipo:string; valor:number; data: string}[]= 
  [{tipo: "Aluguel", valor: 1450, data: "05/12/2024"}];
  enviarDespesas() {
    this.sharedService.updateDataDespesas(this.despesas);
  }
  ngOnInit(){
  
  }
}
