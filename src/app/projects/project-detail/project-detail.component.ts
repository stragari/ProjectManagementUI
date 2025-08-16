import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  projectId: string | null = null;
  showAddTaskModal = false;
  newTaskTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.projectsService.getProjectDetails(projectId).subscribe({
          next: (project) => {
            this.project = project;
          },
          error: (err) => {
            console.error('Error fetching project details:', err);
          }
        });
      }
    });
  }

  openAddTaskModal(): void {
    this.showAddTaskModal = true;
  }

  closeAddTaskModal(): void {
    this.showAddTaskModal = false;
    this.newTaskTitle = '';
  }

  addTask(): void {
    if (this.project && this.newTaskTitle.trim()) {
      this.projectsService.addTask(this.project.id, this.newTaskTitle).subscribe({
        next: () => {
          this.newTaskTitle = '';
          // Refresh project details to show the new task
          this.projectsService.getProjectDetails(this.project!.id).subscribe(project => {
            this.project = project;
            this.closeAddTaskModal();
          });
        },
        error: (err) => {
          console.error('Error adding task:', err);
        }
      });
    }
  }

  markTaskAsCompleted(taskId: string): void {
    if (this.project) {
      this.projectsService.markTaskAsCompleted(this.project.id, taskId).subscribe({
        next: () => {
          // Refresh project details to show the updated task status
          this.projectsService.getProjectDetails(this.project!.id).subscribe(project => {
            this.project = project;
            if (this.project) {
              const task = this.project.tasks.find(t => t.id === taskId);
              if (task) {
                task.isCompleted = true;
              }
            }
          });
        },
        error: (err) => {
          console.error('Error marking task as completed:', err);
        }
      });
    }
  }

}
