import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/user';
import { navItemsAdmin} from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems;
  user;
 
  constructor(private currentUser:User,private auth:AuthService){
    this.thisUser();
  }

 thisUser(){
    this.user =  this.currentUser.getuser();
    if(this.user == null){
      this.auth.cureentUser().subscribe(user=>{
        this.currentUser.setuser(user);
        this.user =  this.currentUser.getuser();
        this.choixNav();
      })
    }else{
      this.choixNav();
    }
 }
  choixNav(){
    
      
      this.navItems = navItemsAdmin;
  
  }

  logout(){
    this.auth.logout();
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
