import { Component, OnInit, EventEmitter } from '@angular/core';
import countryList from './currencies.json';

@Component({
  selector: 'IAZI-currency-input-field',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  public countries: any;
  public price:string = '294693';
  public selectedCurrency: string = '';

  constructor() { 
    this.countries = countryList;
  }

  public optionSelected(value: string){
    this.selectedCurrency = value;
    console.log(value)
  }

  public updateCurrencyValue(value: string){
    this.price = '';
    this.price = value;
    console.log(value);
  }
  ngOnInit(): void {
  }

}
