import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profil/user-profil.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { UpdateEmployeComponent } from '../../update-employe/update-employe.component';
import { FindEmployeComponent } from '../../find-employe/find-employe.component';
import {ComposantEmployeComponent} from'../../composant-employe/composant-employe.component';
import { DepSearchComponent } from '../../dep-search/dep-search.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profil',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path : 'update-employe', component :UpdateEmployeComponent},
    { path : 'find-employe', component :FindEmployeComponent},
    { path : 'composant-employe', component :ComposantEmployeComponent},
    { path : 'dep-search', component :DepSearchComponent},


];
