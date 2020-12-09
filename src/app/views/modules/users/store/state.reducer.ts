

import * as userAction from './state.action'
import { User } from '../user.interface'
import * as fromRoot from '../../../state/app.state'
export interface userState{

    users:User[],
    loaded:boolean,
    lodding:boolean,
    error:string
}
export class AppState extends fromRoot.AppState{
    users:userState
}
export let initialState:userState ={
    users:[],
    loaded:false,
    lodding:false,
    error:""
}
export function userReducer(state =initialState ,action:userAction.action):userState{
    switch(action.type){
        case userAction.UserActionTypes.LOAD:{
            return {
                ...state,
                lodding:true,
                
            }
        }
        case userAction.UserActionTypes.LOAD_SUCCESS:{
            return {
                ...state,
                lodding:false,
                loaded:true,
                users:action.payload
                
            }
        }
        case userAction.UserActionTypes.LOAD_FAIL:{
            return {
                ...state,
                lodding:false,
                loaded:false,
                users:[],
                error:action.payload
                
            }
        }
    }
}
