import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private _http:HttpClient) { }

  saveEmpDetails(empdetails:any[]):Observable<any>{
    return this._http.post("https://angular-besant-default-rtdb.firebaseio.com/empdata.json",empdetails)
  }
}
