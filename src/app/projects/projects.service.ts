import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, timer } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';

import { Project } from '../models/project.model';
import { AddTaskRequest } from '../models/add-task-request.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsCache$: Observable<Project[]> | null = null;
  private readonly cacheRimeInMinutes = 5;
  private readonly apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    if (!this.projectsCache$) {
      const projects$ = this.http.get<Project[]>(this.apiUrl).pipe(
        shareReplay(1)
      );

      this.projectsCache$ = timer(0, this.cacheRimeInMinutes * 60 * 1000).pipe(
        switchMap(() => projects$)
      );
    }
    return this.projectsCache$;
  }

  createProject(name: string): Observable<any> {
    this.projectsCache$ = null;
    return this.http.post(this.apiUrl, { name });
  }

  getProjectDetails(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  addTask(projectId: string, title: string): Observable<any> {
    this.projectsCache$ = null;
    const body: AddTaskRequest = { title };
    return this.http.post(`${this.apiUrl}/${projectId}/tasks`, body);
  }

  markTaskAsCompleted(projectId: string, taskId: string): Observable<any> {
    this.projectsCache$ = null;
    return this.http.put(`${this.apiUrl}/${projectId}/tasks/${taskId}/complete`, {});
  }
}
