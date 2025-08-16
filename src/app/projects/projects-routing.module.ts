import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ProjectListComponent},
  {path: 'create', component: CreateProjectComponent},
  {path: ':id', component: ProjectDetailComponent}
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  // { path: 'list', component: ProjectListComponent },
  // { path: 'create', component: CreateProjectComponent },
  // { path: ':id', component: ProjectDetailComponent },
  // // { path: '', component: ProjectListComponent },
  // // { path: ':id', component: ProjectDetailComponent },
  // // { path: 'create', component: CreateProjectComponent },
  // // { path: 'projects', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
