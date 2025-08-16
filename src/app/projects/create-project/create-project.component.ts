import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {
  projectName: string = '';

  constructor(private projectsService: ProjectsService, private router: Router) {}

  createProject(): void {
    if (this.projectName.trim()) {
      this.projectsService.createProject(this.projectName).subscribe({
        next: () => {
          this.router.navigate(['/projects/list']);
        },
        error: (err) => {
          console.error('Error creating project:', err);
        }
      });
    }
  }

}
