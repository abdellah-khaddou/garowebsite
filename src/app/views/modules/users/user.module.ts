
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTablesComponent } from './tables/tables.component';
import { DataTablesModule } from 'angular-datatables';
import { FormUserComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { usersRoutingModule } from './user.routing';
import { DataTablesComponent } from '../../baseView/tables/tables.component';
import { ButtonsComponent } from '../../baseView/buttons/buttons.component';
import { BaseModule } from '../base.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule,Actions } from '@ngrx/effects';
import { userReducer } from './store/state.reducer';
import { UserEffect } from './store/state.effect';







@NgModule({
  declarations: [
    
    UsersTablesComponent,
    FormUserComponent,
    ProfileComponent,
    DataTablesComponent,
    ButtonsComponent
    
    
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    usersRoutingModule,
    DataTablesModule,
   // StoreModule.forFeature('users',userReducer),
    //EffectsModule.forFeature([UserEffect]),
    

   
  ],
  exports:[
    DataTablesComponent
  ]
})
export class UserModule {
  constructor(){
    console.log("s")
  }
 }
