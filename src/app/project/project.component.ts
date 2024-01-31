import { Component } from '@angular/core';

type MyArrayType = Array<{id: number, name: string}>;

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: MyArrayType = [];

  addNewProject(value: string) {
    this.projects.push({id: this.projects.length, name: value});
  }
}
