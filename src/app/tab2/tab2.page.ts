import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  receitas: {tipo: string; valor: number; data: string}[] = [];
  despesas: {tipo: string; valor: number; data: string}[] = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.currentReceitas.subscribe((receita) =>{
      this.receitas = receita;
    })
    this.sharedService.currentDespesas.subscribe((despesa) =>{
    this.despesas = despesa;
    })
  }
  ngOnInit(){
  
  }
 
}
