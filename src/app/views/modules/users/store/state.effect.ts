import { UserService } from './../services/user.service';
import { Observable,of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions,Effect,ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as userAction from './state.action'
import { map, mergeMap } from 'rxjs/operators';
import { User } from '../user.interface';
@Injectable({
    providedIn: 'root'
})
export class UserEffect{
    constructor(private usersService:UserService,private actions$:Actions){

    }
    // @Effect()
    // loadUsers :Observable<Action>=this.actions$.pipe(
    //     ofType<userAction.Load>(
    //         userAction.UserActionTypes.LOAD
    //     ),
    //     mergeMap((actions:userAction.Load)=>
    //         this.usersService.get().pipe(
    //             map((users:User[])=>{
    //                 console.log(users)
    //                 return new userAction.LoadSuccess(users) 
    //             }
                      
    //             )
    //         )
    //     )
    // )
}
