"use strict";
// student.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var student_routing_module_1 = require("./student-routing.module");
var student_component_1 = require("./student.component");
var student_dashboard_component_1 = require("./student-dashboard/student-dashboard.component");
var card_1 = require("@angular/material/card");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var dialog_1 = require("@angular/material/dialog");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var http_1 = require("@angular/common/http");
var table_1 = require("@angular/material/table");
var ng2_charts_1 = require("ng2-charts");
var ng_circle_progress_1 = require("ng-circle-progress");
var student_courses_component_1 = require("./student-courses/student-courses.component");
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = __decorate([
        core_1.NgModule({
            declarations: [student_component_1.StudentComponent, student_dashboard_component_1.StudentDashboardComponent, student_courses_component_1.StudentCoursesComponent],
            imports: [
                common_1.CommonModule,
                student_routing_module_1.StudentRoutingModule,
                card_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                core_2.MatRippleModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                http_1.HttpClientModule,
                table_1.MatTableModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule,
                ng_circle_progress_1.NgCircleProgressModule.forRoot()
            ],
            exports: [
                dialog_1.MatDialogModule,
                core_2.MatRippleModule
            ]
        })
    ], StudentModule);
    return StudentModule;
}());
exports.StudentModule = StudentModule;
