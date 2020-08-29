import { Component, OnInit } from '@angular/core';
import * as coursesCards from './courses.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {

  constructor(private router: Router) { }
  courses: any;
  ngOnInit(): void {
    this.courses = coursesCards.default;
  }

  itemclick() {
    this.router.navigate(['/studentLogin/aboutCourse']);
  }

}
