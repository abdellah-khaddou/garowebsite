import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEnumComponent,  } from './forms/form/form.component';
import { EnumTablesComponent } from './tables/tables.component';



const routes: Routes = [
  
        {path:'',component:EnumTablesComponent },
        {path:'edit',component:FormEnumComponent },
        {path:'add',component:FormEnumComponent },
        //{path:'show',component:DetailsComponent },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class enumRoutingModule { }