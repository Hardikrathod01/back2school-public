// student-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { StudentCalendarComponent } from './student-calendar/student-calendar.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentExamComponent } from './student-exam/student-exam.component';

const routes: Routes = [
    {
        path: 'studentLogin',
        component: StudentComponent,
        children: [
            {
                path: 'studentDashboard',
                component: StudentDashboardComponent
            },
            {
                path: 'studentCourses',
                component: StudentCoursesComponent
                
            },
            {
                path: 'aboutCourse',
                component: AboutCourseComponent
            },{
                path: 'studentCalendar',
                component: StudentCalendarComponent
            },{
                path: 'studentAssignments',
                component: StudentAssignmentsComponent
            },{
                path: 'studentExams',
                component: StudentExamComponent
            }

        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }