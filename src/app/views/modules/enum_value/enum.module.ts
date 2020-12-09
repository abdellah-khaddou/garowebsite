
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumTablesComponent } from './tables/tables.component';
import { DataTablesModule } from 'angular-datatables';
import { FormEnumComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    
    EnumTablesComponent,
    FormEnumComponent,
   
    
    
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    DataTablesModule

   
  ],
  exports:[
    
  ]
})
export class EnumModule { }
