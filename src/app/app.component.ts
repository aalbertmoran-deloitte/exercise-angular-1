import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { ProjectComponent } from './project/project.component';
import { CourseComponent } from './course/course.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, MatTabsModule, RouterOutlet, StudentComponent, ProjectComponent, CourseComponent]
})

export class AppComponent {}
