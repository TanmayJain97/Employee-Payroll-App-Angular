import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeePayrollApp';
  data=[
    {
      "id":1,"name":"Raj","salary":45000
    },
    {
      "id":2,"name":"Siya","salary":3300
    },
    {
      "id":3,"name":"Piya","salary":55000
    }
  ]
employee = []

//ngOnInit: this.employee=this.data;

isvalue:boolean=true;
color="pink";
}