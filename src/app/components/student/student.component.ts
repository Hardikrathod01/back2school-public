import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  toggleCourseMenu() {
    var courseDropDown = document.getElementById("hideCourseMenu");
    if(courseDropDown.style.display == "block") {
      courseDropDown.style.display = "none";
    } else {
      courseDropDown.style.display = "block";
    }
   
  }

  ngOnInit(): void {
    // this.router.navigate(['/studentLogin/studentDashboard']);
  }

}
