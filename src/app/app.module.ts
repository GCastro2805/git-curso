import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';      //201911261808  agregué ya que marcaba error en [(ngModel)] para filtrar por sexo
import { HttpModule }      from '@angular/http';      //201911261808  agregué ya que marcaba error en [(ngModel)]



import { AppComponent } from './app.component';
import { EmloyeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],    //201911261808  agregué ya que marcaba error en [(ngModel)]
    declarations: [AppComponent, EmloyeeComponent, EmployeeListComponent, EmployeeTitlePipe,
        EmployeeCountComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

