import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  regForm:FormGroup;
  constructor(
    private userService:EmployeeServiceService,
    private formbuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    
    
  }
}