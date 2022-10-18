import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {  ActivatedRoute, Router } from '@angular/router';
import { Suppliermodel } from '../models/Suppliermodel';
import { SupplierService } from '../services/supplier.service';




@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
 

  supplierModelObj:Suppliermodel=new Suppliermodel();
 
  id:number=0;
  
  constructor( private supplier:SupplierService,private router:ActivatedRoute,private route:Router,private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
   
    this.id=this.router.snapshot.params['id'];
    this.supplier.getOneSupplier(this.id).subscribe(data=>{
      console.log(data);
      this.supplierModelObj=data;
      },
      error=>console.log(error));
  }
    onSave(){
     console.log(this.supplierModelObj);
      this.supplier.updateSupplier(this.supplierModelObj,this.id).subscribe(data=>{
        console.log(data)
        this.back();
        alert("Supplier updated Successfully")  
      },
      error=>console.log(error)
       );

  }
  back(){
    this.route.navigate(['/viewSupplier']);
  }

}








  



