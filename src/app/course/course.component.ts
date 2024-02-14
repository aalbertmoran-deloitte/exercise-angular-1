import { Component } from '@angular/core';

type MyArrayType = Array<{id: number, name: string, status: boolean}>;

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courses: MyArrayType = [];

  addNewCourse(value: string, event: Event, nameInput: HTMLInputElement) {
    event.preventDefault();
    if (value != '') {
      this.courses.push({id: this.courses.length, name: value, status: false});
      nameInput.value = '';
    }
  }

  updateCourse(nameUpdate: HTMLInputElement, event: Event){
    event.preventDefault();
    const course = this.courses.find(el => el.status == true) || {id: -1};
    this.courses[course?.id].name = nameUpdate.value;
    nameUpdate.value = ''
  }
  
  deleteCourse(event: Event){
    event.preventDefault();
    
    this.courses = this.courses.filter(el => el.status == false);
    for (let index = 0; index < this.courses.length; index++) {
      this.courses[index].id = index;
    }
  }

  selectCourse(id: number, event: Event, inputName: HTMLInputElement) {
    console.log(this.courses, id);

    for (let index = 0; index < this.courses.length; index++) {
      this.courses[index].status = false;
    }
    
    this.courses[id].status = !this.courses[id].status;
    if ( event ) {
      const target =  event.target as HTMLHeadingElement;
      inputName.value = target.innerHTML;
    }
  }
}
