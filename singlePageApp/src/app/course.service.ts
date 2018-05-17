import { Injectable } from '@angular/core';
import {course} from './course';

@Injectable()
export class CourseService {
private courseList:course[];

  constructor() { 
    this.courseList=[
      {
        name:"Angular",
        image:"angularjs.png",
        price:11000,
        description: "Google's single pafe app framework"
      },
      {
        name:"WebServices",
        image:"AmazonWeb_Services.png",
        price:12000,
        description: "Amazon's web services"
      },
      {
        name:"ASP.Net",
        image:"ASPdotNet.jpg",
        price:1000,
        description: "Microsoft's Web Application for server scripting"
      },
      {
        name:"CSS",
        image:"CSS.jpg",
        price:14000,
        description: "Latest standard for CSS"
      },
      {
        name:"HTML 5",
        image:"HTML.png",
        price:16000,
        description: "For UI Design"
      },
      {
        name:"Python",
        image:"Python.png",
        price:15000,
        description: "Python is an interpreted high-level programming language"
      }
    ]
  }

  getCourses():course[]{
    return this.courseList;
  }
}

/* name, description, price and image */
