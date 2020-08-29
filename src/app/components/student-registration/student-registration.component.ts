import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
  hide = true;
  studentRegistration: FormGroup = new FormGroup({
    studentName: new FormControl(''),
    password: new FormControl(''),
    enrollmentNumber: new FormControl(),
    standard: new FormControl(),
  });

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.studentRegistration.valid) {
      alert('Registration success');
    }
  }

  @Input() error: string | null;

}
