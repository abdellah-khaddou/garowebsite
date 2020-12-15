
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTablesComponent } from './tables/tables.component';
import { FormUserComponent } from './forms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { usersRoutingModule } from './user.routing';
import { ButtonsComponent } from '../../baseView/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule,Actions } from '@ngrx/effects';
import { userReducer } from './store/state.reducer';
import { UserEffect } from './store/state.effect';
import { SharedModule } from '../shared.module';







@NgModule({
  declarations: [
    
    UsersTablesComponent,
    FormUserComponent,
    ProfileComponent,
    ButtonsComponent
    
    
 
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    usersRoutingModule,
    SharedModule,
    StoreModule.forFeature('users',userReducer),
   EffectsModule.forFeature([UserEffect]),
    

   
  ],
  exports:[
    
  ]
})
export class UserModule {}
