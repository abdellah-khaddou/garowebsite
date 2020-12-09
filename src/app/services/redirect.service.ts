import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router:Router,private route: ActivatedRoute ) { }
  redirectToenums(){
    
  }
  toRoot() {
    this.router.navigate(['/']);
  }
  tosignup() {
    this.router.navigate(['/signup']);
  }
  toLogin() {
    
    this.router.navigate(['/login']);
  }

  fromLogin(){
    let prevUrl = this.route.snapshot.queryParamMap.get('prevUrl') || '/';
    localStorage.setItem('prevUrl', prevUrl);
    
    this.router.navigateByUrl(prevUrl);
  }
  toYourPage(){
    let prevUrl = localStorage.getItem('prevUrl');
    this.router.navigateByUrl(prevUrl);
  }
  redirectToUsers(){
    this.router.navigate(['/dashboard/users']);
 }
  toAction(module,action,obj){
    this.router.navigate(['/dashboard/'+module+'/'+action+''],{ queryParams: { id: obj._id } });

  }
}
