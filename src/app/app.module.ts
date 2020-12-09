
import { UserModule } from './views/modules/users/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { UsersComponent } from './views/modules/users/index/users.component';
import { CommonModule } from '@angular/common';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DataTablesModule } from 'angular-datatables';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {  Routing } from './app.routing';



import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BaseModule } from './views/modules/base.module';
import { AppInjector } from './services/inject-service';
import { SppinerComponent } from './views/spinner/spinner.component';
import { CompanieModule } from './views/modules/companies/companies.module';
import { CompaniesComponent } from './views/modules/companies/index/companies.component';
import { EnumModule } from './views/modules/enum/enum.module';
import { EnumsComponent } from './views/modules/enum/index/index.component';
import { DataTablesComponent } from './views/baseView/tables/tables.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersRoutingModule } from './views/modules/users/user.routing';





@NgModule({
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule,
    UserModule,
    CompanieModule,
    AppAsideModule,
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    EnumModule,
    Routing,
    usersRoutingModule,
    // StoreModule.forRoot(),
    // StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot(),
    
    

    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    UsersComponent,
    CompaniesComponent,
    EnumsComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    SppinerComponent,
    
    

    
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(injector:Injector){
   
    AppInjector.setInjector(injector)
  }
 }
