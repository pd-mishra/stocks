import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';
//let service: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
//let apiKey: string = ' IHLGIQODOLKV70FP';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) {}

  get() {
    return stocks.slice();
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: string[]) {
    
      return this.http.get<Array<StockInterface>>(`${service}/stocks/snapshot?symbols=${symbols.join()}`)
    
    }
}
