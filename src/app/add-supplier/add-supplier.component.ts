import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Suppliermodel } from '../models/Suppliermodel';
import { SupplierService } from '../services/supplier.service';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  
  supplierModelObj:Suppliermodel=new Suppliermodel();
  form = new FormGroup({
    name:new FormControl('', [Validators.required]),
    supplierEmail:new FormControl('', [Validators.required]),
    contactNo:new FormControl('', [Validators.required]),
    drugName:new FormControl('', [Validators.required]),

  })
  
  constructor( private supplier:SupplierService,private router:Router) { }
  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
    
   
  }
addSupplier(){
   this.supplier.insertData(this.form)
    .subscribe (res=>{
       
        console.log(res);
        alert("Supplier is Added")  
    
        this.goToSupplierList();
        
      },
    
      error=>console.log(error))
      location.reload();
    };
    

    goToSupplierList(){
      this.router.navigate(['/supplier']);
    }
    onSave(){
      console.log(this.supplierModelObj);
      this.addSupplier();
    }
    }
  



    
      
      
    
  

