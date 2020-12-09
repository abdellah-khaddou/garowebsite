import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { FormUserComponent } from './forms/form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersTablesComponent } from './tables/tables.component';



const routes: Routes = [
  {
      path:'users',
      children:[
        {path:'',component:UsersTablesComponent },
        {path:'edit',component:FormUserComponent },
        {path:'add',component:FormUserComponent },
        {path:'show',component:ProfileComponent },
      ]
  }
   

  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class usersRoutingModule { }