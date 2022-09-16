import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public cart: CartserviceService,
    public router:Router
  ){
    
  }
ngOnInit(): void {
  
}
  
  

}
