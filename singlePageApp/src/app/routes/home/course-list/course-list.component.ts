import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../course.service'
import { course } from '../../../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courselist: course[];
  pricerange: string = "All Courses";

  constructor(private cs: CourseService) {
    this.courselist = cs.getCourses();
  }

  ngOnInit() {

  }

}
