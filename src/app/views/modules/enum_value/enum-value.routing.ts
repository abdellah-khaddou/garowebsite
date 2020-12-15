import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnumValueComponent } from './forms/form/form.component';
import { EnumValueTablesComponent } from './tables/tables.component';




const routes: Routes = [
  
        {path:'',component:EnumValueTablesComponent },
        {path:'edit',component:FormEnumValueComponent },
        {path:'add',component:FormEnumValueComponent },
        //{path:'show',component:DetailsComponent },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class enumValueRoutingModule { }