import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from './students.json';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as subjectCards from './subjectProgress.json';

export interface UpcomingLectures {
  date: string;
  position: number;
  subject: string;
  time: any;
}

let now = new Date();
const ELEMENT_DATA: UpcomingLectures[] = [
  { position: 1, date: new Date().toDateString(), subject: 'Maths', time: now.getHours() + ":" + now.getMinutes() },
  { position: 2, date: new Date().toDateString(), subject: 'Physics', time: now.getHours() + ":" + now.getMinutes() },
  { position: 3, date: new Date().toDateString(), subject: 'English', time: now.getHours() + ":" + now.getMinutes() },
  { position: 4, date: new Date().toDateString(), subject: 'History', time: now.getHours() + ":" + now.getMinutes() },
  { position: 5, date: new Date().toDateString(), subject: 'Art', time: now.getHours() + ":" + now.getMinutes() },
];

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'subject', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  tableTitle: string[] = ['Upcoming Lectures'];

  lineChartData: ChartDataSets[] = [
    { data: [10, 50, 15, 75, 35, 80, 55] },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  pieChartLabels: Label[] = ['Maths', 'Physics', 'History', 'Geography', 'Maths'];
  pieChartData: ChartDataSets[] = [
    { data: [10, 50, 15, 75, 35] },
  ];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  horizontalChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  pieChartOptions = {
    responsive: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: [
        'rgba(54,162,235,1)',
        'rgba(255,99,132,1)',
        'rgba(255,206,86,1)',
        'rgba(75,192,192,1)',
        'rgba(153,102,255,1)',
        'rgba(255,159,64,1)',
        'rgba(255,255,0,1)'],

      backgroundColor: ['rgba(54,162,235,0.2)',
        'rgba(255,99,132)',
        'rgba(255,206,86)',
        'rgba(75,192,192)',
        'rgba(153,102,255)',
        'rgba(255,159,64)',
        'rgba(255,255,0)'],
    },
  ];

  pieChartColors: Color[] = [
    {
      backgroundColor: ['rgba(54,162,235)',
        'rgba(255,99,132)',
        'rgba(255,206,86)',
        'rgba(75,192,192)',
        'rgba(153,102,255)',
        'rgba(255,159,64)',
        'rgba(255,255,0)'],
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  barChartType = 'bar';
  hbarChartType = 'horizontalBar';
  pieChartType = 'pie';
  pieChartLegend = true;

  constructor(private http: HttpClient) { }

  subjectProgress: any;

  ngOnInit(): void {

    var Students = data;
    this.subjectProgress = subjectCards.default;
    // console.log(Students);
    console.log(subjectCards);

  }

}
