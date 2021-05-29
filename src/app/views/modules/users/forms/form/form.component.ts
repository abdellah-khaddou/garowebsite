import { Observable, Subscription } from 'rxjs';
import { Update } from '@ngrx/entity';


import { error } from 'protractor';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../../services/auth.service';
import { ErorrFrormService } from '../../../../../services/error.form.service';
import { RedirectService } from '../../../../../services/redirect.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CompanieService } from '../../../companies/services/companie.service';
import * as fromApp from "../../../../../store/app.reducer"
import * as userAction from "../../../../../store/users/users.action"
import * as companieAction from "../../../../../store/companies/companies.action"
import { Store } from '@ngrx/store';
import { User } from '../../classes/user.interface';


@Component({
  selector: 'form-user',
  templateUrl: 'form.component.html'
})
export class FormUserComponent implements OnInit,OnDestroy {
  companies
  form:FormGroup;
  errors:any;
  invalidtLogin=false;
  user:any={};
  isLoad = false;
  message; 
  subscribtion: Subscription;
  constructor(
    private userService: UserService,
    private error: ErorrFrormService,
    private route :ActivatedRoute,
    private auth:AuthService,
    private store:Store<fromApp.AppState>,
   
  ) {
      this.dispatch();
  }
  dispatch(){
    this.store.dispatch(new companieAction.Load())
  }
  loadData(){
    let id = this.route.snapshot.queryParams.id;
    
    this.subscribtion = this.store.subscribe(state=>{
      this.companies = state.companies.companies;
      if(id){
        this.user = state.users.users.filter(user=>user._id==id)
      }
    })

  }

  ngOnInit(): void {
   
    this.loadData();
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      company: new FormControl('', [
      
      ])
     
    });
  }
  
  isValid(control) {
    return this.error.inValid(control, this.form);
  }

  messageError(control) {
    return this.error.messageError(control, this.form);
  }
  isInputValid(control){
    return this.error.isInputvalid(control,this.form)
  }
  create(){
    

    
  }
  
  ngOnDestroy(){
    this.subscribtion.unsubscribe()
  }
}


