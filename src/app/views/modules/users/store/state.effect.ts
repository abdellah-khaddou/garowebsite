import { catchError } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { Observable,of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions,Effect,ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as userAction from './state.action'
import { map, mergeMap } from 'rxjs/operators';
import { User } from '../classes/user.interface';
@Injectable({
    providedIn: 'root'
})
export class UserEffect{
    constructor(private usersService:UserService,private actions$:Actions){

    }
    @Effect()
    loadUsers :Observable<Action>=this.actions$.pipe(
        ofType<userAction.Load>(
            userAction.UserActionTypes.LOAD
        ),
        mergeMap((actions:userAction.Load)=>
            this.usersService.get().pipe(
                map((res:any)=>{ 
                
                    res.users.forEach((element:any) => {
                        element['companyName']=  element.company?.name
                    });
                    return new userAction.LoadSuccess( res.users)
                }),
                catchError(err=>of(new userAction.LoadFail(err)))
            )
        )
    )

    @Effect()
    loadUser :Observable<Action>=this.actions$.pipe(
        ofType<userAction.LoadOne>(
            userAction.UserActionTypes.LOAD_ONE
        ),
        mergeMap((action:userAction.LoadOne)=>
            this.usersService.search({_id:action.payload}).pipe(
                map((res:any)=>{ 
                    return new userAction.LoadOneSuccess( res.users[0])
                }),
                catchError(err=>of(new userAction.LoadOneFail(err))
                )
            )
        )
    )
    @Effect()
    createUser :Observable<Action>=this.actions$.pipe(
        ofType<userAction.Create>(
            userAction.UserActionTypes.CREATE
        ),
        map((action:userAction.Create)=>action.payload),
        mergeMap((user:User)=>
            this.usersService.create(user).pipe(
                map((newUser:User)=>{ 
                    return new userAction.CreateSuccess(newUser)
                }),
                catchError(err=>of(new userAction.CreateFail(err))
                )
            )
        )
    )
    @Effect()
    updateUser :Observable<Action>=this.actions$.pipe(
        ofType<userAction.UpdateUser>(
            userAction.UserActionTypes.UPDATE
        ),
        map((action:userAction.UpdateUser)=>action.payload),
        mergeMap((user:User)=>
            this.usersService.update(user).pipe(
                map((updateUser:User)=>{ 
                    return new userAction.UpdateSuccess({
                        id:updateUser._id,
                        changes:updateUser
                    })
                }),
                catchError(err=>of(new userAction.UpdateFail(err))
                )
            )
        )
    )
    @Effect()
    deleteUser :Observable<Action>=this.actions$.pipe(
        ofType<userAction.Delete>(
            userAction.UserActionTypes.DELETE
        ),
        map((action:userAction.Delete)=>action.payload),
        mergeMap((id:string)=>
            this.usersService.delete({_id:id}).pipe(
                map(()=>new userAction.DeleteSuccess(id)),
                catchError(err=>of(new userAction.DeleteFail(err))
                )
            )
        )
    )
}
