"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentCoursesComponent = void 0;
var core_1 = require("@angular/core");
var coursesCards = require("./courses.json");
var StudentCoursesComponent = /** @class */ (function () {
    function StudentCoursesComponent(router) {
        this.router = router;
    }
    StudentCoursesComponent.prototype.ngOnInit = function () {
        this.courses = coursesCards["default"];
    };
    StudentCoursesComponent.prototype.itemclick = function () {
        this.router.navigate(['/studentLogin/aboutCourse']);
    };
    StudentCoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-student-courses',
            templateUrl: './student-courses.component.html',
            styleUrls: ['./student-courses.component.scss']
        })
    ], StudentCoursesComponent);
    return StudentCoursesComponent;
}());
exports.StudentCoursesComponent = StudentCoursesComponent;
