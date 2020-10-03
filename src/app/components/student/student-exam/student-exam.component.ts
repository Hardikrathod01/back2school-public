import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface WeeklyTests {
  no: number;
  subject: string;
  topicName: string;
  date: string;
  time: any;
  duration: string;
  totalMarks: number;
  requiredMarks: number;
}

export interface MonthlyTests {
  no: number;
  subject: string;
  topicName: string;
  date: string;
  time: any;
}

export interface FinalExams {
  no: number;
  subject: string;
  date: string;
  time: any;
}

let now = new Date();
let timeNow = now;
let dateNow = new Date().toDateString()
const weeklyTests : WeeklyTests [] = [
  {no: 1, subject: 'Maths',topicName: 'Integration by parts',date: dateNow, time: timeNow, duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 2, subject: 'Physics',topicName: 'Gravity',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 3, subject: 'History',topicName: 'War of Panipat',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 4, subject: 'Geography',topicName: 'Map of India',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 5, subject: 'Maths',topicName: 'Integration by parts',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 6, subject: 'Physics',topicName: 'Gravity',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 7, subject: 'History',topicName: 'War of Panipat',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 8, subject: 'Geography',topicName: 'Map of India',date: dateNow,time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 9, subject: 'Maths',topicName: 'Integration by parts',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 10, subject: 'Physics',topicName: 'Gravity',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 11, subject: 'History',topicName: 'War of Panipat',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
  {no: 12, subject: 'Geography',topicName: 'Map of India',date: dateNow, time: timeNow,duration: '1 hour', totalMarks: 50, requiredMarks: 15},
]

@Component({
  selector: 'app-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.scss']
})

export class StudentExamComponent implements OnInit {

  weeklyTestsColumn: string[] = ['no', 'subject', 'topicName', 'date','time','duration','totalMarks','requiredMarks'];
  finalTestsColumn: string[] = ['no', 'subject', 'date','time','duration','totalMarks','requiredMarks'];
  weeklyTestsData = new MatTableDataSource<WeeklyTests>(weeklyTests);
  monthlyTestsData = new MatTableDataSource<WeeklyTests>(weeklyTests);
  finalTestsData = new MatTableDataSource<WeeklyTests>(weeklyTests);

  @ViewChild('weeklyTestsPaginator') weeklyTestsPaginator: MatPaginator;
  @ViewChild('monthlyTestsPaginator') monthlyTestsPaginator: MatPaginator;
  @ViewChild('finalTestsPaginator') finalTestsPaginator: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.weeklyTestsData.paginator = this.weeklyTestsPaginator;
    this.monthlyTestsData.paginator = this.monthlyTestsPaginator;
    this.finalTestsData.paginator = this.finalTestsPaginator;
  }

  ngOnInit(): void {
  }
}
