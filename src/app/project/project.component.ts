import { Component } from '@angular/core';

type MyArrayType = Array<{id: number, name: string, status: boolean}>;

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: MyArrayType = [];

  addNewProject(value: string, event: Event, nameInput: HTMLInputElement) {
    event.preventDefault();
    if (value != '') {
      this.projects.push({id: this.projects.length, name: value, status: false});
      nameInput.value = '';
    }
  }

  updateProject(nameUpdate: HTMLInputElement, event: Event){
    event.preventDefault();
    const project = this.projects.find(el => el.status == true) || {id: -1};
    this.projects[project?.id].name = nameUpdate.value;
    nameUpdate.value = ''
  }
  
  deleteProject(event: Event, nameUpdate: HTMLInputElement){
    event.preventDefault();
    
    this.projects = this.projects.filter(el => el.status == false);
    for (let index = 0; index < this.projects.length; index++) {
      this.projects[index].id = index;
    }

    nameUpdate.value = '';
  }

  selectProject(id: number, event: Event, inputName: HTMLInputElement) {
    console.log(this.projects, id);

    for (let index = 0; index < this.projects.length; index++) {
      this.projects[index].status = false;
    }
    
    this.projects[id].status = !this.projects[id].status;
    if ( event ) {
      const target =  event.target as HTMLHeadingElement;
      inputName.value = target.innerHTML;
    }
  }
}
