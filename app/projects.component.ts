import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
    selector: 'projects',
    templateUrl: 'templates/projects.component.html',
    providers: [ProjectService]
})

export class ProjectComponent implements OnInit {
    projects: Project[];

    constructor(private service: ProjectService) {}

    ngOnInit() {
        this.service.getProjects().subscribe(projects =>
            this.projects = projects);
    }

}