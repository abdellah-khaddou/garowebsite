import { CompanieModule } from './companies/companies.module';
import { UserModule } from './users/user.module';

import { UsersComponent } from './users/index/users.component';
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { DataTablesComponent } from '../baseView/tables/tables.component';
import { BaseRoutingModule } from './base-routing.module';




// Components Routing


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UserModule,
    CompanieModule,
    DataTablesModule,
    CommonModule,
    BaseRoutingModule

  ],
  declarations: [
    DashboardComponent,
    
    
    
  ],
  exports:[
    DashboardComponent,
    
    
  ]
})
export class BaseModule {}
 
