import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrugServiceService } from '../drug-service.service';
import { Drugs } from '../modules/drugs';

@Component({
  selector: 'app-update-drugs',
  templateUrl: './update-drugs.component.html',
  styleUrls: ['./update-drugs.component.css']
})
export class UpdateDrugsComponent implements OnInit {

  drugs:any=[];
  drug:Drugs=new Drugs();
id:number=0;
  form = new FormGroup({
    suplierEmail: new FormControl('', [Validators.required]),
    drugName: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    batchId: new FormControl('', [Validators.required]),
    expiredDate: new FormControl('', [Validators.required]),
    price:new FormControl('', [Validators.required]),
  }
)
  

constructor(private drugService:DrugServiceService,private router:ActivatedRoute,private route:Router) { }
get f() {
  return this.form.controls;
}

ngOnInit(): void {
  this.id=this.router.snapshot.params['id'];

  this.drugService.getOneDrug(this.id).subscribe((data: any)=>{
    this.drugs=data;
  },(error: any)=>console.log(error));
}
submit(){
this.drugService.updateDrug(this.form,this.router.snapshot.params['id']).subscribe(data=>{
  console.log(data);
this.goToDrugsList();
},
error=>console.log(error)
);

}
goToDrugsList(){
this.route.navigate(['/viewDrugs']);
}
}



