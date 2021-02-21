import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profil/user-profil.component';
import { TableListComponent } from './table-list/table-list.component';
import {AgmCoreModule} from '@agm/core';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FindEmployeComponent } from './find-employe/find-employe.component';
import { ComposantEmployeComponent } from './composant-employe/composant-employe.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AdminLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
