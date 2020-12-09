import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { User } from '../user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { Store } from "@ngrx/store"
import * as userAction from "../store/state.action"

@Component({
  templateUrl: 'tables.component.html',
  styleUrls: ['./tables.component.css']

})
export class UsersTablesComponent {


  users: User[] = [];
  settings={
    module:"users",
    columns:[]
  };
 

  constructor(
    private userService: UserService,
    private router:Router,
    private auth:AuthService ,
    private store:Store<any>) {
    this.settings.columns =[{title:"Name",field:"name"},{title:"Login",field:"login"},{title:"Company",field:"companyName"}]
   }

  ngOnInit(): void {
      //this.store.dispatch(new userAction.Load())
      //this.charge();
  }
  // charge(){
  //   this.auth.cureentUser().subscribe(user=>{
  //       this.userService.get({userid:user._id}).subscribe(users=>{
  //         console.log(users)
  //         this.users=users.users;
  //         this.users.forEach((element:any) => {
  //           element['companyName']=  element.company?.name
  //         });
          
  //       })
        
  //     });    
  // }
  // actionEvent(obj){
  //   console.log(obj)
  //   switch(obj.action){
  //     case "edit":this.edit(obj.value);break;
  //     case "delete":this.delete(obj.value);break;
  //     case "show":this.show(obj.value);break;
  //   }
  // }
  // delete(user){
  //   let res = confirm("are you sure want to delete")
  //   console.log(user)
  //   if(res){
  //     this.userService.delete({_id:user._id}).subscribe(res=>{
  //       this.charge();
  //     });
  //   }
  // }

  edit(user){
   
    this.router.navigate(['/dashboard/users/edit'],{ queryParams: { id: user._id } });
  }
  show(user){
    this.router.navigate(['/dashboard/users/show'],{ queryParams: { id: user._id } });
  }
  ngOnDestroy(): void {
    
  }

  

}
