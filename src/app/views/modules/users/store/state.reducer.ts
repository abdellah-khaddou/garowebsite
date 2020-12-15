
import * as userAction from './state.action'
import { User } from '../classes/user.interface'
import * as fromRoot from '../../../state/app.state'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { EntityState, EntityAdapter,createEntityAdapter } from '@ngrx/entity'
export interface userState extends EntityState<User>{

    selectedUserId:string|null,
    loaded:boolean,
    lodding:boolean,
    error:string
}
export const userAdapter:EntityAdapter<User> = createEntityAdapter<User>({selectId:(user)=>user._id})
export const defaultUser:userState ={
    ids :[],
    entities:{},
    selectedUserId:null,
    loaded:false,
    lodding:false,
    error:""
}

export class AppState extends fromRoot.AppState{
    users:userState
}
// userAdapter.selectId()
export let initialState:userState = userAdapter.getInitialState(defaultUser)
export function userReducer(state =initialState ,action:userAction.action):userState{
    switch(action.type){
        case userAction.UserActionTypes.LOAD:{
            return {
                ...state,
                lodding:true,
                
            }
        }
        case userAction.UserActionTypes.LOAD_SUCCESS:{
            return userAdapter.addAll(action.payload,{
                ...state,
                lodding:false,
                loaded:true
            })
        }
        case userAction.UserActionTypes.LOAD_FAIL:{
            return {
                ...state,
                lodding:false,
                loaded:false,
                entities:{},
                error:action.payload
                
            }
        }
        //load one
        case userAction.UserActionTypes.LOAD_ONE_SUCCESS:{
            return userAdapter.addOne(action.payload,{
                ...state,
                selectedUserId:action.payload._id
            })
        }
        case userAction.UserActionTypes.LOAD_ONE_FAIL:{
            return {
                ...state,
                error:action.payload
                
            }
        }
        //create
        case userAction.UserActionTypes.CREATE_SUCCESS:{
            return userAdapter.addOne(action.payload,state)
        }
        case userAction.UserActionTypes.CREATE_FAIL:{
            return {
                ...state,
                error:action.payload
                
            }
        }
         //update
         case userAction.UserActionTypes.UPDATE_SUCCESS:{
            return userAdapter.updateOne(action.payload,state)
        }
        case userAction.UserActionTypes.UPDATE_FAIL:{
            return {
                ...state,
                error:action.payload
                
            }
        }
         //delete
         case userAction.UserActionTypes.DELETE_SUCCESS:{
            return userAdapter.removeOne(action.payload,state)
        }
        case userAction.UserActionTypes.DELETE_FAIL:{
            return {
                ...state,
                error:action.payload
                
            }
        }
        default: { 
            return state 
        }
    }
}

export const  getUsersState = createFeatureSelector<userState>(
    "users"
)

export const getUsers = createSelector(
    getUsersState,
    userAdapter.getSelectors().selectAll
)
export const getUsersLoadding = createSelector(
    getUsersState,
    (state:userState)=>state.lodding
)
export const getUsersLoaded = createSelector(
    getUsersState,
    (state:userState)=>state.loaded
)
export const getUsersErrors = createSelector(
    getUsersState,
    (state:userState)=>state.error
)

export const getCurrentUserId = createSelector(
    getUsersState,
    (state:userState)=>state.selectedUserId
)
export const getCurrentUser = createSelector(
    getUsersState,
    getCurrentUserId,
    (state:userState)=>state.entities[state.selectedUserId]
)