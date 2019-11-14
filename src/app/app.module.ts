import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { EmloyeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmloyeeComponent, EmployeeListComponent, EmployeeTitlePipe,
        EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
