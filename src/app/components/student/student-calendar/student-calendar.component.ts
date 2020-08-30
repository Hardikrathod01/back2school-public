import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';

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

  hide = true;
  public eventForm = new FormGroup({
    eventName: new FormControl(),
    eventDetail: new FormControl()
  });

  public startDate = new FormControl(new Date(2020,9,4,5,6));
  public endDate = new FormControl(new Date(2020,9,4,5,6));
  public selectInfo: DateSelectArg;
  eventName: string;
  eventDetail: String;
  private  dialogRef: MatDialogRef<TemplateRef<any>>;
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
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
  }

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

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  onNoClick() {
    this.dialogRef.close();
  }

  save() {
    this.eventName = this.eventForm.get('eventName').value;
    this.eventDetail = this.eventForm.get('eventDetail').value;
    const calendarApi = this.selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    
      calendarApi.addEvent({
        id: createEventId(),
        title: this.eventName,
        start: this.startDate.value,
        end: this.endDate.value,
        detail: this.eventDetail
      });
   
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  
  constructor(public dialog: MatDialog) { }
}
