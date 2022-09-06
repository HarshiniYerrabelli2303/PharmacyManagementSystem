import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Drugs } from 'src/app/modules/drugs';
import { DrugServiceService } from 'src/app/services/drug-service.service';


@Component({
  selector: 'app-update-drugs',
  templateUrl: './update-drugs.component.html',
  styleUrls: ['./update-drugs.component.css']
})
export class UpdateDrugsComponent implements OnInit {

  loading = false;
  submitted = false;
  drug:Drugs=new Drugs();
id:number=0;
  
  

constructor(private drugService:DrugServiceService,private router:ActivatedRoute,private route:Router) { }


ngOnInit(): void {
  this.id=this.router.snapshot.params['id'];

  this.drugService.getOneDrug(this.id).subscribe((data: any)=>{
    this.drug=data;
  },(error: any)=>console.log(error));
}
onSubmit(){
  
  this.loading = true;
this.drugService.updateDrug(this.drug,this.id).pipe(first()).subscribe(data=>{
  
  console.log(data);

},

error=>{
 
  console.log(error)
}
);
alert(" do you want to update");
}
back(){
this.route.navigate(['/viewDrug']);
}
}



