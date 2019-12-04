
/* --------------------------------
 * Generar los datos fijos
 * 201911121848     GACC
 * -------------------------------- */

import { Component, OnInit } from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage:string = 'Loading data, Please wait...';

    constructor(private _employeeService : EmployeeService) {
        
    }

    ngOnInit(){
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error)=>{
                this.statusMessage = 'Problem with the service, please try again after sometime';
                console.error(error);
            });
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

}
