import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppModule } from '../../app.module';
import { AppInjector } from '../../services/inject-service';


@Injectable(
    {
        providedIn:'root'
    }
)

export class BaseProvider  {
    url=environment.url; 
   // http:HttpClient;  
    hedears = localStorage.getItem('token') ?
     new HttpHeaders({
       'Authorization': localStorage.getItem('token')
      
    }):
     new HttpHeaders({'Authorization': "null"});
  constructor(public http:HttpClient  ) {
    // const injector = AppInjector.getInjector();
   //  console.log(injector)
    // this.http = injector.get(HttpClient);
   } 
   
   generateUrl(module:string,action:string,params:any={}){
    return this.url+'?Module='+module+'&Action='+action+'&jsonData='+JSON.stringify(params)
    
  }
 
  post(module:string,action:string,params:any={},options?:any):Observable<any>{
    //return of("any")
    return this.http.post(this.generateUrl(module,action,params),params,{headers :this.hedears});
  }
  get(module:string,action:string,params:any={}):Observable<any>{
    //return of("any")
    return this.http.get(this.generateUrl(module,action,params),{headers :this.hedears})
  }

}
