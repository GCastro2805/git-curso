"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); //201911261808  agregué ya que marcaba error en [(ngModel)] para filtrar por sexo
var http_1 = require("@angular/http"); //201911261808  agregué ya que marcaba error en [(ngModel)]
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var EmployeeTitle_Pipe_1 = require("./employee/EmployeeTitle.Pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simple_component_1 = require("./Others/simple.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./Others/pageNotFound.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employees', component: employeeList_component_1.EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [
            app_component_1.AppComponent, employee_component_1.EmloyeeComponent, employeeList_component_1.EmployeeListComponent, EmployeeTitle_Pipe_1.EmployeeTitlePipe,
            employeeCount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent, home_component_1.HomeComponent, pageNotFound_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map