import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { CartserviceService } from './services/cartservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pharmacy-management-system';
  showMenu = true;
  showSignup =true;
  showShoppingcart = true;
  showDoctorLogin =true;
  showDoctorSignup =true;
  constructor(public router:Router,private cart:CartserviceService,private breakpointObserver: BreakpointObserver,public loginService:AuthenticationService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showMenu = event.url !== "/login";

      }
      if(event instanceof NavigationStart){
        this.showSignup = event.url !== "/register";
      }
      if(event instanceof NavigationStart){
        this.showShoppingcart = event.url !== "/cart";
      }
    
    });
  }
 
 
    ngOnInit(){
      this.loginService.autoAuthUser();
    }
}
