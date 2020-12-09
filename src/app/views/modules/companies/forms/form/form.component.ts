import { Companie } from '../../companies.interface';
import { error } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { AuthService } from '../../../../../services/auth.service';
import { ErorrFrormService } from '../../../../../services/error.form.service';
import { RedirectService } from '../../../../../services/redirect.service';
import { ActivatedRoute } from '@angular/router';
import { CompanieService } from '../../services/companie.service';


@Component({
  selector: 'edit-user',
  templateUrl: 'form.component.html'
})
export class FormCompanieComponent implements OnInit {
  ismessage
  valueType ;
  form:FormGroup;
  errors:any;
  companie={};
  isLoad = false;
  message="edit Companie success"
  constructor( 
    private error: ErorrFrormService,
    private companieService :CompanieService,
    private route:ActivatedRoute,
    private auth:AuthService
  ) {
    this.getEdit();
    this.ismessage=false;
    this.valueType=['Transporteur','Administrateur','Chargeur']
  }
          
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80),
      ]),
      tel: new FormControl('', [
        Validators.required,

      ]),
      type: new FormControl('', [
        Validators.required,

        
      ])
       
 
     
    });
  }
  getEdit(){
    let id = this.route.snapshot.queryParams.id;
    this.companieService.search({_id:id}).subscribe(companie=>{
      if(companie)this.companie =companie;
    })
    
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
  save(){
    this.isLoad = true
      this.companieService.create(this.companie).subscribe(res=>{
          if(res){
            
              this.ismessage=true
              setTimeout(() => {
                this.ismessage = false;
              }, 3000)
              
            
          }
          
          this.isLoad = false
          
      },error=>{
        console.log(error)
        
          this.isLoad = false
      });
  
    
  }
    

}


