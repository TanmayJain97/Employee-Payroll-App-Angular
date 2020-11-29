import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private userService:EmployeeServiceService
  ) { }

  employee=[];
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.get()
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.employee = response;
        console.log("Response" + response)
      },
        error => {
          console.log(error)
        }
      )
  }
}