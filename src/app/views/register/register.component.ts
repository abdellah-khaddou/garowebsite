import { error } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { ErorrFrormService } from '../../services/error.form.service';
import { RedirectService } from '../../services/redirect.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  errors:any;
  invalidtLogin=false;
  isLoad = false;
  valueType
  constructor(
    private currentUser:User,
    private auth: AuthService,
    private redirect:RedirectService, 
    private error: ErorrFrormService,
    
  ) {
    this.valueType=['Transporteur','Chargeur'];
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      type: new FormControl('', [
       
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
  register(){
   console.log(this.form.getRawValue());
    this.isLoad = true
     this.auth.register(this.form.getRawValue()).subscribe((res:any)=>{
        if(res){

          localStorage.setItem('token',res.token)
            this.auth.cureentUser().subscribe(user=>{
              
              this.currentUser.setuser(user);
              this.redirect.toRoot();
            
              
            })
        }
        if(!res)this.invalidtLogin = true;
         this.isLoad = false
        
     },error=>{
       this.errors =  error.error.error;
       if(!this.errors){
        this.invalidtLogin = true;
       }
      this.isLoad = false
     });
 
  }

}


