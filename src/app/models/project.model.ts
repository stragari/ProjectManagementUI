import { ProjectTask } from "./project-task.model";

export interface Project {
    id: string;
    name: string;
    creationDate: Date;
    tasks: ProjectTask[];  // Project Tasks list
}