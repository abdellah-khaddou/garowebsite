import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { User } from '../classes/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { select, Store } from "@ngrx/store"
import * as userAction from "../store/state.action"
import { Subscription, Observable } from 'rxjs';
import * as fromUsers from "../store/state.reducer"
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
 users$: Observable<User[]>
 errors$: Observable<any>

  constructor(
    private userService: UserService,
    private router:Router,
    private auth:AuthService ,
    private store:Store<any>
    ) {
    this.settings.columns =[{title:"Name",field:"name"},{title:"Login",field:"login"},{title:"Company",field:"companyName"}]
   }

  ngOnInit(): void {
      this.store.dispatch(new userAction.Load())
      this.users$ = this.store.pipe(select(fromUsers.getUsers))
      this.errors$ = this.store.pipe(select(fromUsers.getUsersErrors))
  }

  actionEvent(obj){
    console.log(obj)
    switch(obj.action){
      case "edit":this.edit(obj.value);break;
      case "delete":this.delete(obj.value);break;
      case "show":this.show(obj.value);break;
    }
  }
  delete(user:User){
    let res = confirm("are you sure want to delete")
    console.log(user)
    if(res){
      this.store.dispatch(new userAction.Delete(user._id))
    }
  }

  edit(user){
   
    this.router.navigate(['/dashboard/users/edit'],{ queryParams: { id: user._id } });
  }
  show(user){
    this.router.navigate(['/dashboard/users/show'],{ queryParams: { id: user._id } });
  }
  ngOnDestroy(): void {
    //this.userSub.unsubscribe()
  }

  

}
