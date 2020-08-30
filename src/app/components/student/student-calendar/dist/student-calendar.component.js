"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentCalendarComponent = void 0;
var core_1 = require("@angular/core");
var event_utils_1 = require("./event-utils");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var StudentCalendarComponent = /** @class */ (function () {
    function StudentCalendarComponent(dialog) {
        this.dialog = dialog;
        this.disabled = false;
        this.showSpinners = true;
        this.showSeconds = false;
        this.touchUi = false;
        this.enableMeridian = false;
        this.stepHour = 1;
        this.stepMinute = 1;
        this.stepSecond = 0;
        this.color = 'primary';
        this.hide = true;
        this.eventForm = new forms_1.FormGroup({
            eventName: new forms_1.FormControl(),
            eventDetail: new forms_1.FormControl()
        });
        this.startDate = new forms_1.FormControl(new Date(2020, 9, 4, 5, 6));
        this.endDate = new forms_1.FormControl(new Date(2020, 9, 4, 5, 6));
        this.calendarVisible = true;
        this.calendarOptions = {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            initialEvents: event_utils_1.INITIAL_EVENTS,
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this)
            /* you can update a remote database when these fire:
            eventAdd:
            eventChange:
            eventRemove:
            */
        };
        this.currentEvents = [];
    }
    StudentCalendarComponent.prototype.handleDateSelect = function (selectInfo) {
        var dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minHeight = '300px';
        dialogConfig.minWidth = '400px';
        this.selectInfo = selectInfo;
        this.dialogRef = this.dialog.open(this.myTemplate, dialogConfig);
    };
    StudentCalendarComponent.prototype.handleEventClick = function (clickInfo) {
        if (confirm("Are you sure you want to delete the event '" + clickInfo.event.title + "'")) {
            clickInfo.event.remove();
        }
    };
    StudentCalendarComponent.prototype.handleEvents = function (events) {
        this.currentEvents = events;
    };
    StudentCalendarComponent.prototype.handleDateClick = function (arg) {
        alert('date click! ' + arg.dateStr);
    };
    StudentCalendarComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    StudentCalendarComponent.prototype.save = function () {
        this.eventName = this.eventForm.get('eventName').value;
        this.eventDetail = this.eventForm.get('eventDetail').value;
        var calendarApi = this.selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        calendarApi.addEvent({
            id: event_utils_1.createEventId(),
            title: this.eventName,
            start: this.startDate.value,
            end: this.endDate.value,
            detail: this.eventDetail
        });
        this.dialogRef.close();
    };
    StudentCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('myTemplateRef')
    ], StudentCalendarComponent.prototype, "myTemplate");
    __decorate([
        core_1.ViewChild('picker')
    ], StudentCalendarComponent.prototype, "picker");
    __decorate([
        core_1.ViewChild('picker1')
    ], StudentCalendarComponent.prototype, "picker1");
    StudentCalendarComponent = __decorate([
        core_1.Component({
            selector: 'app-student-calendar',
            templateUrl: './student-calendar.component.html',
            styleUrls: ['./student-calendar.component.scss']
        })
    ], StudentCalendarComponent);
    return StudentCalendarComponent;
}());
exports.StudentCalendarComponent = StudentCalendarComponent;
