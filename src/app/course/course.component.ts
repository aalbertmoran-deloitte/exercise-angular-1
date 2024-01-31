import { Component } from '@angular/core';

type MyArrayType = Array<{id: number, name: string}>;

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: MyArrayType = [];

  addNewCourse(value: string) {
    this.courses.push({id: this.courses.length, name: value});
  }
}
