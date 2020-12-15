import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';


import { error } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../../services/auth.service';
import { ErorrFrormService } from '../../../../../services/error.form.service';
import { RedirectService } from '../../../../../services/redirect.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CompanieService } from '../../../companies/services/companie.service';
import * as fromUsers from '../../store/state.reducer'
import * as userActions from "../../store/state.action"
import { Store } from '@ngrx/store';
import { User } from '../../classes/user.interface';


@Component({
  selector: 'form-user',
  templateUrl: 'form.component.html'
})
export class FormUserComponent implements OnInit {
  companies
  form:FormGroup;
  errors:any;
  invalidtLogin=false;
  user:any={};
  isLoad = false;
  message; 
  constructor(
    private userService: UserService,
    private error: ErorrFrormService,
    private route :ActivatedRoute,
    private auth:AuthService,
    private store:Store<fromUsers.AppState>,
    private redirect:RedirectService,
    private companieService:CompanieService
  ) {
    let id = this.route.snapshot.queryParams.id;
    if(id){
      this.getEdit(id);
    }

      this.companieService.get().subscribe(companies=>{
        this.companies=companies.companies;
        
      })
   
  }

  ngOnInit(): void {

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
    if(this.user._id)
        this.store.dispatch(new userActions.UpdateUser(this.user))
    else
         new userActions.Create(this.user)

    
  }
  getEdit(id){

    this.store.dispatch(new userActions.LoadOne(id))
    var user$ :Observable<any> = this.store.select(fromUsers.getCurrentUser);
    user$.subscribe(user=>this.user=user)

    //this.store.subscribe(user=>{this.user=user})
    // this.userService.search({_id:id}).subscribe(user=>{ 
      
    //   if(user)this.user =user;
    // })
  }

}


