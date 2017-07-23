import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import 'materialize-css';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';
import { ClientComponent } from './client/client.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { DomainComponent } from './domain/domain.component';
import { ProjectComponent } from './project/project.component';
import { RoleComponent } from './role/role.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyTypeComponent } from './technology-type/technology-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    TeamComponent,
    ClientComponent,
    DepartmentComponent,
    DesignationComponent,
    DomainComponent,
    ProjectComponent,
    RoleComponent,
    TechnologyComponent,
    TechnologyTypeComponent
  ],
  imports: [
    MaterializeModule,
     BrowserAnimationsModule,
    NoopAnimationsModule,
     HttpModule,
    BrowserModule,
    FormsModule,
    MdButtonModule, MdCheckboxModule,
    MdToolbarModule,
    MdInputModule,
    RouterModule.forRoot([
      {
            path: 'team',
            component: TeamComponent
      },
      {
            path: 'role',
            component: RoleComponent
      },
      {
            path: 'domain',
            component: DomainComponent
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
