import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profil/user-profil.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { UpdateEmployeComponent } from '../../update-employe/update-employe.component';
import { FindEmployeComponent } from '../../find-employe/find-employe.component';
import { ComposantEmployeComponent } from '../../composant-employe/composant-employe.component';
import { DepSearchComponent } from '../../dep-search/dep-search.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpdateEmployeComponent,
    FindEmployeComponent,
    ComposantEmployeComponent,
    DepSearchComponent
  ]
})

export class AdminLayoutModule {}
