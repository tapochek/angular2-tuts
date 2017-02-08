import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectComponent } from './projects.component';
import { ProjectSummaryComponent } from "./projectSummary.component";

const routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full'},
    { path: 'projects', component: ProjectComponent }
];

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ProjectComponent,
        ProjectSummaryComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}