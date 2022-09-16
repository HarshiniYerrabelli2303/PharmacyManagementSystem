import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drugs } from 'src/app/modules/drugs';
import { DrugServiceService } from 'src/app/services/drug-service.service';


@Component({
  selector: 'app-view-all-drugs',
  templateUrl: './view-all-drugs.component.html',
  styleUrls: ['./view-all-drugs.component.css']
})
export class ViewAllDrugsComponent implements OnInit {
  
  drugs:Drugs[]=[];
  drugName:any;
  p:number=1;
  drug:Drugs={
    drugId:undefined,
	 suplierEmail:"",
	 drugName:"",
	  quantity:0,
	  batchId:0,
	  expiredDate:"",
	  price:0
  };
  constructor(private drugsService:DrugServiceService,private router:Router) { }

  ngOnInit() {
    this.drugsService.getAllDrugs().subscribe(data=>{
      this.drugs=data;
    });
  }
 
  updateDrug(drugId: number){
    this.router.navigate(['/updateDrug', drugId])
  }
  deleteDrug(drugId: number){
    this.drugsService.deleteDrugs(drugId).subscribe(data=>{
      console.log(data);
      location.reload(); 
    })
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

  key='id';
  reverse:boolean=false;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
