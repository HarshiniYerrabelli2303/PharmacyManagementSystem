import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Suppliermodel } from '../models/Suppliermodel';
import { SupplierService } from '../services/supplier.service';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  ComponentName="supplierList";
  suppliers:Suppliermodel[]=[];
  //searchText:any;
  name:any;
  
  p:number=1;
supplier: Suppliermodel={
  id:undefined,
    name:'',
    supplierEmail:'',
    contactNo:'',
    drugName:'',

}

  constructor(private supplierservice:SupplierService,private router:Router) { }

  ngOnInit(): void {
    this.supplierservice.getAllSupplier().subscribe(data =>{
      this.suppliers=data;
    });
  }
  Search(){
    if(this.name==""){
      this.ngOnInit();
    }else{
      this.suppliers=this.suppliers.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  

     
    updateSupplier(id: number ,name:string, supplierEmail:string,contactNo:string,drugName:string){
      this.supplier.id=id,
      this.supplier.name=name,
      this.supplier.supplierEmail=supplierEmail,
      this.supplier.contactNo=contactNo,
      this.supplier.drugName=drugName
      this.router.navigate(['updatesupplier', id])
    }
    deleteSupplier(id: number){
      this.supplierservice.deleteSupplier(id).subscribe(data =>{
        console.log(data);
      
        location.reload();
        alert("Are You Sure to delete Supplier")  
      },
      error=>console.log(error)
       );
       
    }
    


    }
  
    
      
      
      
    
      
      
    
  
  



