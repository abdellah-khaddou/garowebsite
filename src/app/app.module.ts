
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CommonModule } from '@angular/common';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DataTablesModule } from 'angular-datatables';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'


import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {  AppRoutingModule } from './app.routing';



import { ChartsModule } from 'ng2-charts';
import { AppInjector } from './services/inject-service';
import { SppinerComponent } from './views/spinner/spinner.component';
import { EnumModule } from './views/modules/enum/enum.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';





@NgModule({
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppAsideModule,
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    AppBreadcrumbModule,
    PerfectScrollbarModule,
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    EnumModule,
    AppRoutingModule,
     StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument(),
     EffectsModule.forRoot(),
    
    

    ChartsModule
  ],
  declarations: [
    AppComponent,
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
