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
import { MatTableModule } from '@angular/material/table'
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AboutCourseComponent } from './about-course/about-course.component';

@NgModule({
  declarations: [StudentComponent, StudentDashboardComponent, StudentCoursesComponent, AboutCourseComponent],
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
    NgCircleProgressModule.forRoot()
  ],
  exports: [
    MatDialogModule,
    MatRippleModule
  ]
})
export class StudentModule { }