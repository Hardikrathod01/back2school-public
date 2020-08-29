// student-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AboutCourseComponent } from './about-course/about-course.component';

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
            }

        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }