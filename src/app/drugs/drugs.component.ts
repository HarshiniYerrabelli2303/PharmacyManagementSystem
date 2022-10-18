  import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Drugs } from '../models/drugs';
import { DrugServiceService } from '../services/drug-service.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
   
  invalidDrugs = false;
  message = '';
 
    form = new FormGroup({
      suplierEmail: new FormControl('', [Validators.required]),
      drugName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      batchId: new FormControl('', [Validators.required]),
      expiredDate: new FormControl('', [Validators.required]),
      price:new FormControl('', [Validators.required]),
    }
  )
    
  
  constructor(private drugService:DrugServiceService,private router:Router) { }
  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }
submit(){

 
    if (this.form.valid === false) {
      this.invalidDrugs = true;
      this.message = 'You must fill in all the fields!';
    }
    else { 
      this.drugService.insertData(this.form).subscribe(
        data=>{
         console.log(data);
       
      },
      error=>{console.log(error)},
     
      );
      location.reload();
      this.message = 'successfully added the drugs';
  }
 
  
}
back(){
  this.router.navigate(['/viewDrug'])
}
}
