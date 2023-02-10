import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BanK } from '../data-type-bank';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BankdataService {
  // url = "http://localhost:3000/bankdetails";
  url = "http://localhost:1648/api/Banks";
  constructor(private http:HttpClient, private route:ActivatedRoute) { }
  
  banks(){
    let results = this.http.get<BanK[]>(this.url);
    return results
  }

  banksByUserId(userId:string) {
    let results = this.http.get<BanK[]>(`${this.url}/user/${userId}`)
    return results;
  }
}
