import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalsComponent } from '../modals/modals.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) { }
  navbarOpen = false;
  username: string;
  password: string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    var buttonDiv = document.getElementById("registerButtons");
    if (buttonDiv.style.display === "none") {
      buttonDiv.style.display = "block";
    } else {
      buttonDiv.style.display = "none";
    }
  }

  ngOnInit(): void {
  }

  openLogin() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '300px';
    dialogConfig.minWidth = '400px';

    const dialogRef = this.dialog.open(ModalsComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      result => {
        if (result != undefined && result != null && result != "") {
          this.username = result.username; this.password = result.password
          if (this.username === "student" && this.password === "student") {
            this.router.navigate(['studentLogin/studentDashboard']);
          } else if (this.username === "teacher" && this.password === "teacher") {
            this.router.navigate(['teacherLogin']);
          }
        }

      },

    );



  }

}
