﻿
/* ---------------------------
    Creación de clase Employee
    GACC        201911081641
  --------------------------- */

import { Component } from '@angular/core'

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    
})

export class EmloyeeComponent
{
    columnSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}