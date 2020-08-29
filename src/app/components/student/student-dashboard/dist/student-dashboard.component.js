"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentDashboardComponent = void 0;
var core_1 = require("@angular/core");
var data = require("./students.json");
var subjectCards = require("./subjectProgress.json");
var now = new Date();
var ELEMENT_DATA = [
    { position: 1, date: new Date().toDateString(), subject: 'Maths', time: now.getHours() + ":" + now.getMinutes() },
    { position: 2, date: new Date().toDateString(), subject: 'Physics', time: now.getHours() + ":" + now.getMinutes() },
    { position: 3, date: new Date().toDateString(), subject: 'English', time: now.getHours() + ":" + now.getMinutes() },
    { position: 4, date: new Date().toDateString(), subject: 'History', time: now.getHours() + ":" + now.getMinutes() },
    { position: 5, date: new Date().toDateString(), subject: 'Art', time: now.getHours() + ":" + now.getMinutes() },
];
var StudentDashboardComponent = /** @class */ (function () {
    function StudentDashboardComponent(http) {
        this.http = http;
        this.displayedColumns = ['position', 'subject', 'date', 'time'];
        this.dataSource = ELEMENT_DATA;
        this.tableTitle = ['Upcoming Lectures'];
        this.lineChartData = [
            { data: [10, 50, 15, 75, 35, 80, 55] },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.pieChartLabels = ['Maths', 'Physics', 'History', 'Geography', 'Maths'];
        this.pieChartData = [
            { data: [10, 50, 15, 75, 35] },
        ];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.horizontalChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.pieChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                borderColor: [
                    'rgba(54,162,235,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                    'rgba(255,159,64,1)',
                    'rgba(255,255,0,1)'
                ],
                backgroundColor: ['rgba(54,162,235,0.2)',
                    'rgba(255,99,132)',
                    'rgba(255,206,86)',
                    'rgba(75,192,192)',
                    'rgba(153,102,255)',
                    'rgba(255,159,64)',
                    'rgba(255,255,0)']
            },
        ];
        this.pieChartColors = [
            {
                backgroundColor: ['rgba(54,162,235)',
                    'rgba(255,99,132)',
                    'rgba(255,206,86)',
                    'rgba(75,192,192)',
                    'rgba(153,102,255)',
                    'rgba(255,159,64)',
                    'rgba(255,255,0)']
            },
        ];
        this.lineChartLegend = false;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.barChartType = 'bar';
        this.hbarChartType = 'horizontalBar';
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var Students = data;
        this.subjectProgress = subjectCards["default"];
        // console.log(Students);
        console.log(subjectCards);
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-student-dashboard',
            templateUrl: './student-dashboard.component.html',
            styleUrls: ['./student-dashboard.component.scss']
        })
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;
