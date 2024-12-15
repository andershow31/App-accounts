import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//ppara que possa mandar as informações para componentes não realcionados, precisamos usar um service
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private receitasSource = new BehaviorSubject<{tipo: string; valor: number; data: string}[]>([]);
  private despesasSource = new BehaviorSubject<{tipo: string; valor: number; data: string}[]>([]);
  currentReceitas= this.receitasSource.asObservable();
  currentDespesas = this.despesasSource.asObservable();
  updateData(receitas: {tipo: string; valor: number; data: string}[],  ) {
    this.receitasSource.next(receitas);
   
  }
  updateDataDespesas(despesas: {tipo: string; valor: number; data: string}[]) {
    this.despesasSource.next(despesas);
   
  }
 
  constructor() { }
}
