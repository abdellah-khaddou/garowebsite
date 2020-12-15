
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumTablesComponent } from './tables/tables.component';
import { DataTablesModule } from 'angular-datatables';
import { FormEnumComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { enumRoutingModule } from './enum.routing';








@NgModule({
  declarations: [
    
    EnumTablesComponent,
    FormEnumComponent,
   
    
    
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule,
    enumRoutingModule

   
  ],
  exports:[
    
  ]
})
export class EnumModule { }
