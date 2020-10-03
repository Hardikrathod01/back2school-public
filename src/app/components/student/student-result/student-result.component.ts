import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface Examresult {
  no: number;
  examType: string;
  subject: string;
  topicName: string;
  date: string;
  marks: number;
  grade: string;
}

let dateNow = new Date().toDateString()
const examResult : Examresult [] = [
  {no: 1, examType: 'Weekly Test', subject: 'Maths',topicName: 'Integration by parts',date: dateNow, marks: 70, grade: 'A'},
  {no: 2, examType: 'Monthly Test', subject: 'Physics',topicName: 'Gravity',date: dateNow, marks: 60, grade: 'B'},
  {no: 3, examType: 'Final Exam', subject: 'History',topicName: '-',date: dateNow, marks: 80, grade: 'C'},
  {no: 4, examType: 'Weekly Test', subject: 'Geography',topicName: 'Map of India',date: dateNow, marks: 30, grade: 'F'},
  {no: 5, examType: 'Weekly Test', subject: 'Maths',topicName: 'Integration by parts',date: dateNow, marks: 70, grade: 'A'},
  {no: 4, examType: 'Monthly Test', subject: 'Physics',topicName: 'Gravity',date: dateNow, marks: 60, grade: 'B'},
  {no: 7, examType: 'Final Exam', subject: 'History',topicName: '-',date: dateNow, marks: 80, grade: 'C'},
  {no: 8, examType: 'Weekly Test', subject: 'Geography',topicName: 'Map of India',date: dateNow, marks: 30, grade: 'F'},
  {no: 9, examType: 'Weekly Test', subject: 'Maths',topicName: 'Integration by parts',date: dateNow, marks: 70, grade: 'A'},
  {no: 10, examType: 'Monthly Test', subject: 'Physics',topicName: 'Gravity',date: dateNow, marks: 60, grade: 'B'},
  {no: 11, examType: 'Final Exam', subject: 'History',topicName: '-',date: dateNow, marks: 80, grade: 'C'},
  {no: 12, examType: 'Weekly Test', subject: 'Geography',topicName: 'Map of India',date: dateNow, marks: 30, grade: 'F'}
]

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {
  @ViewChild('examResultPaginator') examResultPaginator: MatPaginator;

  examResultColumn: string[] = ['no','examType', 'subject','topicName', 'date','marks','grade'];
  examResultData = new MatTableDataSource<Examresult>(examResult);

  constructor() { }

  ngAfterViewInit() {
    this.examResultData.paginator = this.examResultPaginator;
  }

  ngOnInit(): void {
  }

}
