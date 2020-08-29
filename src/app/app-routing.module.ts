import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components//teacher/teacher.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { TeacherRegistrationComponent } from './components/teacher-registration/teacher-registration.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    pathMatch: 'full'
  }, {
    path: 'studentLogin',
    component: StudentComponent,
    pathMatch: 'full',
  }, {
    path: 'teacherLogin',
    component: TeacherComponent,
    pathMatch: 'full'
  }, {
    path: 'studentRegistration',
    component: StudentRegistrationComponent,
    pathMatch: 'full'
  }, {
    path: 'teacherRegistration',
    component: TeacherRegistrationComponent,
    pathMatch: 'full'
  }, {
    path: '**',
    component: NavbarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
