/* ---------------------------
    Creación de clase Employee
    GACC        201911081641
  --------------------------- */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmloyeeComponent = (function () {
    function EmloyeeComponent() {
        this.columnSpan = 2;
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.gender = 'Male';
        this.age = 20;
        this.showDetails = false;
    }
    EmloyeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    return EmloyeeComponent;
}());
EmloyeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    })
], EmloyeeComponent);
exports.EmloyeeComponent = EmloyeeComponent;
//# sourceMappingURL=employee.component.js.map