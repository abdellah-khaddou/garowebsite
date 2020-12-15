
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesTablesComponent } from './tables/tables.component';
import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCompanieComponent } from './forms/form/form.component';
import { DetailsComponent } from './details/details.component';
import { CompaniesComponent } from './index/companies.component';
import { companiesRoutingModule } from './companie.routing';
import { SharedModule } from '../shared.module';





@NgModule({
  declarations: [
    CompaniesComponent,
    CompaniesTablesComponent,
    FormCompanieComponent,
    DetailsComponent,
    
     
    
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    companiesRoutingModule,
    SharedModule
    


   
  ],
  exports:[
    
  ]
})
export class CompanieModule { }
