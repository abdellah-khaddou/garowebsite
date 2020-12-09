import { EnumValueService } from '../services/service.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Enum } from '../enum.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  templateUrl: 'tables.component.html',
  styleUrls: ['./tables.component.css']

})
export class EnumTablesComponent {

  dtOptions: DataTables.Settings = {};
  enums: Enum[] = [];
  columns;
  dtTrigger = new Subject<Enum>();

  constructor(private enumValueService: EnumValueService,private router:Router,private auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
   
      this.charge();
  }
  charge(){
        this.enumValueService.get().subscribe(res=>{
          console.log(res)
          this.enums=res;
          this.dtTrigger.next();
        })
         
  }
  delete(value){
    let res = confirm("are you sure want to delete")
    
    if(res){
      this.enumValueService.delete({_id:value._id}).subscribe(res=>{
        this.charge();
      });
    }
  }

  edit(value){
    console.log(value)
    this.router.navigate(['/dashboard/enumerations/edit'],{ queryParams: { id: value._id } });
  }
  show(value){
    this.router.navigate(['/dashboard/enumerations/show'],{ queryParams: { id: value._id } });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  

}
