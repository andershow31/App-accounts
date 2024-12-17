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
 
  ngOnInit(){}
  calcSaldo(): number{
    const totalRec = this.receitas.reduce((soma, receita) => soma+receita.valor, 0);
    //o método reduce neste caso, acumula na variável soma os valores em receita
    //a arrow function mostra o que será feito, soma neste caso, do soma + receita.valor, começando do zero
    const totalDesp = this.despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
    return totalRec - totalDesp;
  }
 
}
