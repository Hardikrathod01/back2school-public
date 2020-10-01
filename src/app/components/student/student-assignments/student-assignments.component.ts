import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export interface PendingAssignments {
  no: number;
  subject: string;
  topicName: string;
  lastDate: string;
}

export interface CompletedAssignments {
  no: number;
  subject: string;
  topicName: string;
  status: string;
  marks: any;
}

let now = new Date();
const PendingAssignments : PendingAssignments [] = [
  {no: 1, subject: 'Maths',topicName: 'Integration by parts',lastDate: new Date().toDateString()},
  {no: 2, subject: 'Physics',topicName: 'Gravity',lastDate: new Date().toDateString()},
  {no: 3, subject: 'History',topicName: 'War of Panipat',lastDate: new Date().toDateString()},
  {no: 4, subject: 'Geography',topicName: 'Map of India',lastDate: new Date().toDateString()},
  {no: 5, subject: 'Maths',topicName: 'Integration by parts',lastDate: new Date().toDateString()},
  {no: 6, subject: 'Physics',topicName: 'Gravity',lastDate: new Date().toDateString()},
  {no: 7, subject: 'History',topicName: 'War of Panipat',lastDate: new Date().toDateString()},
  {no: 8, subject: 'Geography',topicName: 'Map of India',lastDate: new Date().toDateString()},
  {no: 9, subject: 'Maths',topicName: 'Integration by parts',lastDate: new Date().toDateString()},
  {no: 10, subject: 'Physics',topicName: 'Gravity',lastDate: new Date().toDateString()},
  {no: 11, subject: 'History',topicName: 'War of Panipat',lastDate: new Date().toDateString()},
  {no: 12, subject: 'Geography',topicName: 'Map of India',lastDate: new Date().toDateString()},
]

const CompletedAssignments : CompletedAssignments [] = [
  {no: 1, subject: 'Maths',topicName: 'Integration by parts', status: 'Submited', marks: 'Pending for Evaluation'},
  {no: 2, subject: 'Physics',topicName: 'Gravity',status: 'Passed', marks: '40'},
  {no: 3, subject: 'History',topicName: 'War of Panipat',status: 'Passed', marks: '68'},
  {no: 4, subject: 'Geography',topicName: 'Map of India',status: 'Failed', marks: '35'},
  {no: 5, subject: 'Maths',topicName: 'Integration by parts', status: 'Submited', marks: 'Pending for Evaluation'},
  {no: 6, subject: 'Physics',topicName: 'Gravity',status: 'Passed', marks: '40'},
  {no: 7, subject: 'History',topicName: 'War of Panipat',status: 'Passed', marks: '68'},
  {no: 8, subject: 'Geography',topicName: 'Map of India',status: 'Failed', marks: '35'},
  {no: 9, subject: 'Maths',topicName: 'Integration by parts', status: 'Submited', marks: 'Pending for Evaluation'},
  {no: 10, subject: 'Physics',topicName: 'Gravity',status: 'Passed', marks: '40'},
  {no: 11, subject: 'History',topicName: 'War of Panipat',status: 'Passed', marks: '68'},
  {no: 12, subject: 'Geography',topicName: 'Map of India',status: 'Failed', marks: '35'},
]

@Component({
  selector: 'app-student-assignments',
  templateUrl: './student-assignments.component.html',
  styleUrls: ['./student-assignments.component.scss']
})
export class StudentAssignmentsComponent implements OnInit {
  public assignmentForm = new FormGroup({
    subjectName : new FormControl(),
    topicName : new FormControl(),
    fileUpload : new FormControl()
  });

  pendingAssColumns: string[] = ['no', 'subject', 'topicName', 'lastDate','actions'];
  pendingAssData = new MatTableDataSource<PendingAssignments>(PendingAssignments);
  completedAssColumns: string[] = ['no', 'subject', 'topicName', 'status','marks'];
  completedAssData = new MatTableDataSource<CompletedAssignments>(CompletedAssignments);

  @ViewChild('pendingPaginator') pendingPaginator: MatPaginator;
  @ViewChild('completedPaginator') completedPaginator: MatPaginator;
  @ViewChild('myFileUploadTemplate') myFileUploadTemplate: TemplateRef<any>;

  private dialogRef: MatDialogRef<TemplateRef<any>>;

  ngAfterViewInit() {
    this.pendingAssData.paginator = this.pendingPaginator;
    this.completedAssData.paginator = this.completedPaginator;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submitAssignment(id,subject,topicName){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '350px';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '40vw';
    this.assignmentForm.controls['subjectName'].setValue(subject);
    this.assignmentForm.controls['topicName'].setValue(topicName);
    this.dialogRef = this.dialog.open(this.myFileUploadTemplate, dialogConfig);
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
