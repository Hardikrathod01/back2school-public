import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { MatTooltip } from '@angular/material/tooltip';
declare var $: any;

@Component({
  selector: 'app-student-calendar',
  templateUrl: './student-calendar.component.html',
  styleUrls: ['./student-calendar.component.scss']
})


export class StudentCalendarComponent implements OnInit {
  @ViewChild('myTemplateRef') myTemplate: TemplateRef<any>;
  @ViewChild('picker') picker: any;
  @ViewChild('picker1') picker1: any;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 0;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public color: ThemePalette = 'primary';
  public eventClickedId;
  public calendarApi;

  hide = true;
  public eventForm = new FormGroup({
    eventName: new FormControl(),
    eventDetail: new FormControl(),
    startDate: new FormControl(new Date(2020, 9, 4, 5, 6)),
    endDate: new FormControl(new Date(2020, 9, 4, 5, 6)),
  });


  public selectInfo: DateSelectArg;
  eventName: string;
  eventDetail: String;
  private dialogRef: MatDialogRef<TemplateRef<any>>;
  calendarOptions: CalendarOptions;

  currentEvents: EventApi[] = [];

  handleDateSelect(selectInfo: DateSelectArg) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '300px';
    dialogConfig.minWidth = '400px';
    this.selectInfo = selectInfo;
    this.dialogRef = this.dialog.open(this.myTemplate, dialogConfig);
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  onNoClick() {
    this.dialogRef.close();
    this.eventForm.reset();
    this.eventClickedId = "";
  }

  handleEventClick(clickInfo: EventClickArg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '300px';
    dialogConfig.minWidth = '400px';

    if (clickInfo.event.title != undefined || clickInfo.event.title != "") {
      this.eventForm.controls['eventName'].setValue(clickInfo.event.title);
      this.eventForm.controls['startDate'].setValue(clickInfo.event.start);
      this.eventForm.controls['endDate'].setValue(clickInfo.event.end);
      this.eventForm.controls['eventDetail'].setValue(clickInfo.event.extendedProps.description);
      this.eventClickedId = clickInfo.event.id;
    }

    this.dialogRef = this.dialog.open(this.myTemplate, dialogConfig);

  }

  save() {
    this.eventName = this.eventForm.get('eventName').value;
    this.eventDetail = this.eventForm.get('eventDetail').value;
    const calendarApi = this.selectInfo.view.calendar;

    calendarApi.addEvent({
      id: createEventId(),
      title: this.eventName,
      start: this.eventForm.get('startDate').value,
      end: this.eventForm.get('endDate').value,
      description: this.eventDetail
    });
    this.eventClickedId = "";
    this.dialogRef.close();
    this.eventForm.reset();
  }

  deleteEvent() {
    const calendarApi = this.selectInfo.view.calendar;
    const event = calendarApi.getEventById(this.eventClickedId);
    this.eventClickedId = "";
    event.remove();
    this.dialogRef.close();
    this.eventForm.reset();

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      events: INITIAL_EVENTS,
      weekends: true,
      contentHeight: "auto",
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),

      /* you can update a remote database when these fire:
      eventAdd:
      eventChange: 
      eventRemove:
      */
    }
  }

  constructor(public dialog: MatDialog) { }
}
