  import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DrugServiceService } from '../drug-service.service';
import { Drugs } from '../modules/drugs';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
   
 
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
  this.drugService.insertData(this.form).subscribe(data=>{
    console.log(data);
this.goToDrugsList();
  },
  error=>console.log(error)
  );
  
}
goToDrugsList(){
  this.router.navigate(['/viewDrugs'])
}
}
