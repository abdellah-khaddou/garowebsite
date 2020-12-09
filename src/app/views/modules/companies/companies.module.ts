
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesTablesComponent } from './tables/tables.component';
import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCompanieComponent } from './forms/form/form.component';
import { DetailsComponent } from './details/details.component';
import { UserModule } from '../users/user.module';





@NgModule({
  declarations: [
    
    CompaniesTablesComponent,
    FormCompanieComponent,
    DetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule,
    UserModule,


   
  ],
  exports:[
    
  ]
})
export class CompanieModule { }
