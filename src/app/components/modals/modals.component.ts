import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';


export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  username: string;
  password: string;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalsComponent>,) {
    this.loginForm = fb.group({
      username: [this.username, Validators.required],
      password: [this.password, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.loginForm.value);
  }
}
