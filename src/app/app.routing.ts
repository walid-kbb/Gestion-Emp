import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
    { path:'update/:id', component: UpdateEmployeComponent },
    {path :'employes',  redirectTo: 'table-list'},

    {path: '',redirectTo: 'table-list', pathMatch: 'full'},
    {path: '',component: AdminLayoutComponent,children: [{path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
