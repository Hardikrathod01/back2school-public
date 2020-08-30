"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var navbar_component_1 = require("./navbar/navbar.component");
var router_1 = require("@angular/router");
var modals_component_1 = require("./modals/modals.component");
var dialog_1 = require("@angular/material/dialog");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var teacher_component_1 = require("./teacher/teacher.component");
var student_registration_component_1 = require("./student-registration/student-registration.component");
var teacher_registration_component_1 = require("./teacher-registration/teacher-registration.component");
var card_1 = require("@angular/material/card");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var student_module_1 = require("./student/student.module");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [navbar_component_1.NavbarComponent, modals_component_1.ModalsComponent, teacher_component_1.TeacherComponent, student_registration_component_1.StudentRegistrationComponent, teacher_registration_component_1.TeacherRegistrationComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                dialog_1.MatDialogModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                core_2.MatRippleModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                student_module_1.StudentModule,
            ],
            exports: [
                navbar_component_1.NavbarComponent,
                modals_component_1.ModalsComponent,
                dialog_1.MatDialogModule,
                core_2.MatRippleModule
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
