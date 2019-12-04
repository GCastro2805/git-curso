import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';      //201911261808  agregué ya que marcaba error en [(ngModel)] para filtrar por sexo
import { HttpModule }      from '@angular/http';      //201911261808  agregué ya que marcaba error en [(ngModel)]
import { RouterModule, Routes }      from '@angular/router'; 


import { AppComponent } from './app.component';
import { EmloyeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import {SimpleComponent} from './Others/simple.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './Others/pageNotFound.component';

const appRoutes: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'employees', component:EmployeeListComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],    //201911261808  agregué ya que marcaba error en [(ngModel)]
    declarations: [
      AppComponent, EmloyeeComponent, EmployeeListComponent, EmployeeTitlePipe,
        EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

