import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drugs } from '../models/drugs';
import { CartserviceService } from '../services/cartservice.service';
import { DrugServiceService } from '../services/drug-service.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  drugs:Drugs[]=[];
  drugName:any;

  public productList : any ;

  searchKey:string ="";
  constructor( 
    public cart: CartserviceService,private drug:DrugServiceService) { }

  ngOnInit(): void {
    this.drug.getAllDrugs().subscribe(data=>{
      this.drugs=data;
      this.productList = data;
      
      this.productList.forEach((a:any) => {
       
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  
 
  

  @Input("searchedText") __searchedProduct: string=''; 

  
 

  
  addToCart(drug:any){    
    this.cart.addtoCart(drug);
    window.alert("Your Product has been added to cart!")
    localStorage.setItem('localCart',JSON.stringify(drug));
  }
  search(){
    if(this.drugName ==" "){
      this.ngOnInit();
    }else{
      this.drugs=this.drugs.filter(res=>{
        return res.drugName.toLocaleLowerCase().match(this.drugName.toString());
      })
    }
  }

  
 
}
