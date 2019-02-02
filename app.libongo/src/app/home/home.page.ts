import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  url: string = 'https://libongo.herokuapp.com/api/cotacao';
  SimbMoeda1: string =  "$";
  SimbMoeda2: string = "Kz";

  dolar: any;
  euro: any;
  valor1: any;
  resultCalc: any;

  constructor(private _http: HttpClient){}

  ngOnInit() {
    this._http.get(this.url).subscribe((dados: any) => {
      this.dolar = parseInt(dados.dolar);
      this.euro = parseInt(dados.euro);
    });
  }

  calcular(valor){
    if( this.SimbMoeda1  === "$"){
      this.resultCalc = this.dolar * valor;
    } 
    else if(this.SimbMoeda1  === "€"){
      this.resultCalc = this.euro * valor;
    } 
    else {
      this.resultCalc = valor;
    }
  }

  trocarMoeda(simbAtual){
    if( simbAtual  === "$"){
      this.resultCalc = this.dolar * this.valor1;
    } 
    else if(simbAtual  === "€"){
      this.resultCalc = this.euro * this.valor1;
    } 
    else {
      this.resultCalc = this.valor1;
    }
  }
}
