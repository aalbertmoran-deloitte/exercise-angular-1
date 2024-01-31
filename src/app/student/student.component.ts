import { Component } from '@angular/core';

type MyArrayType = Array<{id: number, name: string}>;

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})


export class StudentComponent {

  students: MyArrayType = [];

  addNewStudent(value: string) {
    this.students.push({id: this.students.length, name: value});
  }
  
}
