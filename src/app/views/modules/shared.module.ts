
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DataTablesComponent } from '../baseView/tables/tables.component';





// Components Routing


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    

  ],
  declarations: [

    DataTablesComponent
    
    
    
    
  ],
  exports:[

    DataTablesComponent
  ]
})
export class SharedModule {}
 
