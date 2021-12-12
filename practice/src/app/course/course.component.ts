import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = [
    { id:1, name:'Learn Angular', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image:'../../assets/pic1.jpg'},
    { id:2, name:'Learn TypeScript', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , image:'../../assets/pic2.jpg'},
    { id:3, name:'Learn Javscript', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , image:'../../assets/pic3.jpg'},
    { id:4, name:'Learn React', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , image:'../../assets/pic10.jpg'}    
  ]
}
