import { Component, Input, Output } from '@angular/core';

type MyArrayType = Array<{id: number, name: string, status: boolean}>;

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})


export class StudentComponent {

  students: MyArrayType = [];

  addNewStudent(value: string, event: Event, nameInput: HTMLInputElement) {
    event.preventDefault();
    if (value != '') {
      this.students.push({id: this.students.length, name: value, status: false});
      nameInput.value = '';
    }
  }

  updateStudent(nameUpdate: HTMLInputElement, event: Event){
    event.preventDefault();
    const student = this.students.find(el => el.status == true) || {id: -1};
    this.students[student?.id].name = nameUpdate.value;
    nameUpdate.value = ''
  }
  
  deleteStudent(event: Event){
    event.preventDefault();
    
    this.students = this.students.filter(el => el.status == false);
    for (let index = 0; index < this.students.length; index++) {
      this.students[index].id = index;
    }
  }

  selectStudent(id: number, event: Event, inputName: HTMLInputElement) {
    console.log(this.students, id);

    for (let index = 0; index < this.students.length; index++) {
      this.students[index].status = false;
    }
    
    this.students[id].status = !this.students[id].status;
    if ( event ) {
      const target =  event.target as HTMLHeadingElement;
      inputName.value = target.innerHTML;
    }
  }
  
}
