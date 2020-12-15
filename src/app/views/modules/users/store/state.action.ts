
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '../classes/user.interface';

export enum UserActionTypes{
    LOAD = "load",
    LOAD_SUCCESS = "load success",
    LOAD_FAIL = "load fail",
    LOAD_ONE = "load one",
    LOAD_ONE_SUCCESS = "load one success",
    LOAD_ONE_FAIL = "load one fail",
    CREATE = "create",
    CREATE_SUCCESS = "create success",
    CREATE_FAIL = "create fail",
    UPDATE = "update",
    UPDATE_SUCCESS = "update success",
    UPDATE_FAIL = "update fail",
    DELETE = "delete",
    DELETE_SUCCESS = "delete success",
    DELETE_FAIL = "delete fail",
    
}
// Load all 
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
//load one
export class LoadOne implements Action{
    readonly type = UserActionTypes.LOAD_ONE
    constructor(public payload:string){}
}

export class LoadOneSuccess implements Action{
    readonly type = UserActionTypes.LOAD_ONE_SUCCESS
    constructor(public payload:User){}
}

export class LoadOneFail implements Action{
    readonly type = UserActionTypes.LOAD_ONE_FAIL
    constructor(public payload:string){}

}

//create 
export class Create implements Action{
    readonly type = UserActionTypes.CREATE
    constructor(public payload:User){}
}

export class CreateSuccess implements Action{
    readonly type = UserActionTypes.CREATE_SUCCESS
    constructor(public payload:User){}
}

export class CreateFail implements Action{
    readonly type = UserActionTypes.CREATE_FAIL
    constructor(public payload:string){}

}
//update 
export class UpdateUser implements Action{
    readonly type = UserActionTypes.UPDATE
    constructor(public payload:User){}
}

export class UpdateSuccess implements Action{
    readonly type = UserActionTypes.UPDATE_SUCCESS
    constructor(public payload:Update<User>){}
}

export class UpdateFail implements Action{
    readonly type = UserActionTypes.UPDATE_FAIL
    constructor(public payload:string){}

}
//delete 
export class Delete implements Action{
    readonly type = UserActionTypes.DELETE
    constructor(public payload:string){}
}

export class DeleteSuccess implements Action{
    readonly type = UserActionTypes.DELETE_SUCCESS
    constructor(public payload:string){}
}

export class DeleteFail implements Action{
    readonly type = UserActionTypes.DELETE_FAIL
    constructor(public payload:string){}

}
export type action = 
    Load       |LoadSuccess   |LoadFail   |
    LoadOne    |LoadOneSuccess|LoadOneFail|
    Create     |CreateSuccess |CreateFail |
    UpdateUser |UpdateSuccess |UpdateFail |
    Delete     |DeleteSuccess |DeleteFail 

