
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enumValueRoutingModule } from './enum-value.routing';
import { FormEnumValueComponent } from './forms/form/form.component';
import { EnumValueTablesComponent } from './tables/tables.component';








@NgModule({
  declarations: [
    
    FormEnumValueComponent,
    EnumValueTablesComponent
   
    
    
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule,
    enumValueRoutingModule

   
  ],
  exports:[
    
  ]
})
export class EnumValueModule { }
