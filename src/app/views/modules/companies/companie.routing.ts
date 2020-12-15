import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormCompanieComponent } from './forms/form/form.component';
import { CompaniesTablesComponent } from './tables/tables.component';




const routes: Routes = [
 
        {path:'',component:CompaniesTablesComponent },
        {path:'edit',component:FormCompanieComponent },
        {path:'add',component:FormCompanieComponent },
        {path:'show',component:DetailsComponent },
    
   

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class companiesRoutingModule { }