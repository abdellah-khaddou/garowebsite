import { ActionReducerMap } from "@ngrx/store";
import * as authReducer from "./auth/auth.reducer";
import * as userReducer from "./users/users.reducer";
import * as companies from "./companies/companies.reducer";
import * as products from "./products/module.reducer";
import * as orders from "./orders/module.reducer";
import * as catagories from "./catagories/module.reducer";


export interface AppState {
    auth: authReducer.State,
    users:userReducer.State,
    companies:companies.State,
    products: products.State,
    orders: orders.State,
    catagories:catagories.State

   
}
export const appReducer : ActionReducerMap<AppState> = {
    auth:authReducer.authReducer,
    users:userReducer.userReducer,
    companies:companies.Reducer,
    products:products.Reducer,
    orders:orders.Reducer,
    catagories:catagories.Reducer
    

};
