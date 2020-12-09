import { Component, Injector, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppInjector } from './services/inject-service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
 
   }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      console.log(evt)
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
