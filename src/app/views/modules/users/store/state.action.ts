
import { Action } from '@ngrx/store';
import { User } from '../user.interface';

export enum UserActionTypes{
    LOAD = "load",
    LOAD_SUCCESS = "load success",
    LOAD_FAIL = "load fail"
}

export class Load implements Action{
    readonly type = UserActionTypes.LOAD
}

export class LoadSuccess implements Action{
    readonly type = UserActionTypes.LOAD_SUCCESS
    constructor(public payload:User[]){}
}

export class LoadFail implements Action{
    readonly type = UserActionTypes.LOAD_FAIL
    constructor(public payload:string){}

}
export type action = Load | LoadSuccess | LoadFail
