import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugServiceService } from '../drug-service.service';
import { Drugs } from '../modules/drugs';

@Component({
  selector: 'app-view-all-drugs',
  templateUrl: './view-all-drugs.component.html',
  styleUrls: ['./view-all-drugs.component.css']
})
export class ViewAllDrugsComponent implements OnInit {
  
  drugs:any=[];
  constructor(private drugsService:DrugServiceService,private router:Router) { }

  ngOnInit() {
   this.getEmployees();
  }
  getEmployees() {
    this.drugsService.getAllDrugs().subscribe(data=>this.drugs=data);
  }
  updateDrug(id: number){
    this.router.navigate(['/updateDrug', id])
  }
  deleteDrug(id: number){
    this.drugsService.deleteDrugs(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    }
    
    
    )
  }
}
