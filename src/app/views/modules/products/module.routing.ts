import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TablesComponent } from './tables/tables.component';
import { FormComponent } from './forms/form/form.component';





const routes: Routes = [
 
        {path:'',component:TablesComponent },
        {path:'edit',component:FormComponent },
        {path:'add',component:FormComponent },
        {path:'show',component:DetailsComponent },
    
   

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }