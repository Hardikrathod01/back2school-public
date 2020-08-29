"use strict";
// student-routing.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var student_component_1 = require("./student.component");
var student_dashboard_component_1 = require("./student-dashboard/student-dashboard.component");
var student_courses_component_1 = require("./student-courses/student-courses.component");
var about_course_component_1 = require("./about-course/about-course.component");
var routes = [
    {
        path: 'studentLogin',
        component: student_component_1.StudentComponent,
        children: [
            {
                path: 'studentDashboard',
                component: student_dashboard_component_1.StudentDashboardComponent
            },
            {
                path: 'studentCourses',
                component: student_courses_component_1.StudentCoursesComponent
            },
            {
                path: 'aboutCourse',
                component: about_course_component_1.AboutCourseComponent
            }
        ]
    }
];
var StudentRoutingModule = /** @class */ (function () {
    function StudentRoutingModule() {
    }
    StudentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], StudentRoutingModule);
    return StudentRoutingModule;
}());
exports.StudentRoutingModule = StudentRoutingModule;
