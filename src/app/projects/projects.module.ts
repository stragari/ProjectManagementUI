import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { TaskStatusPipe } from './pipes/task-status.pipe';
import { TaskHighlightDirective } from './directives/task-highlight.directive';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    CreateProjectComponent,
    TaskStatusPipe,
    TaskHighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    RouterModule ,
  ],
  exports: [
    // TaskHighlightDirective,
  ],
})
export class ProjectsModule { }
