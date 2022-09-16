import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    public totalItem:number=0;
  constructor(private cart:CartserviceService,private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
   this.cart.getProducts()
   .subscribe(res=>{
    this.totalItem=res.length;
   })
  }

}
