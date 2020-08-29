import { NgModule } from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AboutCourseComponent } from './about-course.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [AboutCourseComponent],
  providers:[DatePipe]
})
export class AboutCourseModule { }