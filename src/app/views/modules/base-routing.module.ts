
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../containers/default-layout/default-layout.component';
import { AuthGardService } from '../../services/auth.gard.service';
import { DetailsComponent } from './companies/details/details.component';
import { FormCompanieComponent } from './companies/forms/form/form.component';
import { CompaniesComponent } from './companies/index/companies.component';
import { CompaniesTablesComponent } from './companies/tables/tables.component';
import { FormEnumComponent } from './enum/forms/form/form.component';
import { EnumsComponent } from './enum/index/index.component';
import { EnumTablesComponent } from './enum/tables/tables.component';

import { FormUserComponent } from './users/forms/form/form.component';
import { UsersComponent } from './users/index/users.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UsersTablesComponent } from './users/tables/tables.component';




const routes: Routes = [
  {
    path: 'dashboard', 
		component: DefaultLayoutComponent,
		canActivate:[AuthGardService],
		children:[
			
			 { path: '', component:CompaniesTablesComponent  ,pathMatch: 'full'},
			 { path: 'users', component:UsersComponent ,
			 children:[
				{path:'',component:UsersTablesComponent },
				{path:'edit',component:FormUserComponent },
				{path:'add',component:FormUserComponent },
				{path:'show',component:ProfileComponent },
			  ]
			},
			 { path: 'companies', component:CompaniesComponent ,
				children:[
					{path:'',component:CompaniesTablesComponent },
					{path:'edit',component:FormCompanieComponent },
					{path:'add',component:FormCompanieComponent },
					{path:'show',component: DetailsComponent},
				] 
			},
			{ path: 'enumerations', component:EnumsComponent ,
			children:[
				{path:'',component:EnumTablesComponent },
				{path:'edit',component:FormEnumComponent },
				{path:'add',component:FormEnumComponent },
				
			] 
		},
		
			//{ path: 'companies',              component:CompanieComponent ,pathMatch:'full' },
		],
    
  },
//   {
// 	path: 'users',
	
// 	loadChildren: () => import('../modules/users/user.module').then(m => m.UserModule),
	
//   },
 
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
  })

  export class BaseRoutingModule{}


