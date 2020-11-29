import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employeeURL:string = environment.empURL;
  bseURL=this.employeeURL;

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.bseURL);
  }
}