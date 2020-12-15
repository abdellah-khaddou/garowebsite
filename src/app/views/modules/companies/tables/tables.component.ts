
import { Component } from '@angular/core';
import { Companie } from '../companies.interface';
import { CompanieService } from '../services/companie.service';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'tables.component.html',
  styleUrls: ['./tables.component.css']

})
export class CompaniesTablesComponent {


  companies: Observable<Companie>;
  settings={
    module:"companies",
    columns:[]
  };


  constructor(private companieService: CompanieService,private router:Router,private auth:AuthService) {
    this.settings.columns =[{title:"Name",field:"name"},{title:"Email",field:"email"},
                            {title:"Tel",field:"tel"},{title:"Type",field:"type"}]
   
   }

  ngOnInit(): void {
    
  this.chargeData()
   
      
  }
  chargeData(){
    
    this.companies= this.companieService.get().pipe(map(companies=>{
        return companies.companies;
        
      }))
    

  }
  delete(companie){
    let res = confirm("are you sure want to delete")
    if(res){
      this.companieService.delete({_id:companie._id}).subscribe(res=>{
        if(res){ 
          this.chargeData()
        }
      });
    }
  }

  edit(companie){
    this.router.navigate(['/dashboard/companies/edit'],{ queryParams: { id: companie._id } });
  }
  show(companie){
    this.router.navigate(['/dashboard/companies/show'],{ queryParams: { id: companie._id } });
  }
  ngOnDestroy(): void {

  }

}
