import { Component, OnInit } from '@angular/core';
import * as courseDetail from './courseDetail.json';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrls: ['./about-course.component.scss']
})
export class AboutCourseComponent implements OnInit {

  constructor() { }
  courseDetail: any;

  ngOnInit(): void {
    this.courseDetail = courseDetail.default[0];

    var courseDropDown = document.getElementById("hideCourseMenu");
    if (courseDropDown.style.display == "none") {
      courseDropDown.style.display = "block";
    }
  }

}
