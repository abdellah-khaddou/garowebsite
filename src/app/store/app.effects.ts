import { AuthEffects } from "./auth/auth.effects";
import *  as users from './users/users.effects';
import *  as companies from './companies/companies.effects';
import *  as products from './products/module.effects';
import *  as orders from './orders/module.effects';
import *  as catagories from './catagories/module.effects';


 export let appeffects : any[]= [
     AuthEffects,
    users.UsersEffects,
    companies.Effects,
    products.Effects,
    orders.Effects,
    catagories.Effects
]
