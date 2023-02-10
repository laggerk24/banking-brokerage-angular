import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BanK } from '../data-type-bank';


@Injectable({
  providedIn: 'root'
})
export class BankdataService {
  url = "http://localhost:3000/bankdetails";
  constructor(private http:HttpClient) { }
  
  banks(){
    let results = this.http.get<BanK[]>(this.url);
    return results
  }

}
