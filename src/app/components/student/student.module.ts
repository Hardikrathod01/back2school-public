// student.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentExamComponent } from './student-exam/student-exam.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { MatMenuModule } from '@angular/material/menu';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [StudentComponent, StudentDashboardComponent, StudentCoursesComponent, AboutCourseComponent, StudentCalendarComponent, StudentAssignmentsComponent, StudentExamComponent, StudentResultComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule,
    RouterModule,
    NgCircleProgressModule.forRoot(),
    FullCalendarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
  ],
  exports: [
    MatDialogModule,
    MatRippleModule,
    MatMenuModule,
  ]
})
export class StudentModule { }