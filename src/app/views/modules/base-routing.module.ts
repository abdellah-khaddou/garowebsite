
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../containers/default-layout/default-layout.component';
import { AuthGardService } from '../../services/auth.gard.service';
import { CompaniesTablesComponent } from './companies/tables/tables.component';




const routes: Routes = [
  {
    path: '', 
		component: DefaultLayoutComponent,
		// canActivate:[AuthGardService],
		children:[
			
			
			 {
				path: 'users',
				
				loadChildren: () => import('../modules/users/user.module').then(m => m.UserModule),
				
			  },
			  {
				path: 'companies',
				
				loadChildren: () => import('../modules/companies/companie.module').then(m => m.CompanieModule),
				
			  },
			  {
			  path: 'enumerations',
				
			  	loadChildren: () => import('../modules/enum/enum.module').then(m => m.EnumModule),
			  
			 },
			 {
				path: 'enumerations_value',
				  
					loadChildren: () => import('../modules/enum_value/enum-value.module').then(m => m.EnumValueModule),
			
			},
			{
				path: 'products',
				  
					loadChildren: () => import('../modules/products/module.module').then(m => m.ProductModule),
			
			},
			{
				path: 'orders',
				  
					loadChildren: () => import('../modules/orders/module.module').then(m => m.OrderModule),
			
			},
			{
				path: 'categories',
				  
					loadChildren: () => import('../modules/categories/module.module').then(m => m.CatagoriesModule),
			
			},
			
			  
		
			//{ path: 'companies',              component:CompanieComponent ,pathMatch:'full' },
		],
    
  },
 
 
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
  })

  export class BaseRoutingModule{}


