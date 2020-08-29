import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.scss']
})
export class TeacherRegistrationComponent implements OnInit {
  hide = true;
  teacherRegistration: FormGroup = new FormGroup({
    teacherName: new FormControl(''),
    password: new FormControl(''),
    teacherIdNumber: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.teacherRegistration.valid) {
      alert('Registration success');
    }
  }

  @Input() error: string | null;

}
