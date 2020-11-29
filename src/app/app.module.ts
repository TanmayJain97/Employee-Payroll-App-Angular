import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';

import {HttpClientModule} from '@angular/common/http';
import { EmployeeServiceService } from './service/employee-service.service';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { InvalidURLComponent } from './component/invalid-url/invalid-url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    InvalidURLComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }