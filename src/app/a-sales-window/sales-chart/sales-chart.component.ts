
import { Subscription } from 'rxjs';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SalesInteractionService } from 'src/app/services/sales-interaction.service';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnInit  {
  searchTerm : string='';
  saleso  : any;
  isLoading= false;
  private salesSubs: Subscription | undefined;
  arr: Array<any> =[];

  title: string="";
  type: string="" ;
  data: any[]=[] ;
  columnNames: string[]=[] ;
  options: { colors: string[]; backgroundColor: string; is3D: boolean; hAxis: { textStyle: { color: string; }; }; vAxis: { textStyle: { color: string; }; }; titleTextStyle: { color: string; }; nameTextStyle: { color: string; }; boderRadius: number; } | undefined;
  width :number=0;
  height :number=0;


  constructor(private salesInteractionService: SalesInteractionService) { }

  async ngOnInit() {


        this.salesInteractionService.getSalesChartInfo2().subscribe((results:any) =>{
          results.sales.map((chart:any) =>{
            console.log(chart._id,);
            this.arr.push([+chart._id,+chart.total])
          })
        });
        await this.sleep(6000);
        this.Newchart();

    //setTimeout(() => {  console.log("World!"); }, 2000);
  }



public  Newchart(){
  console.log(this.arr);
  this.title = 'Sales Done (per Each month this year)';
    this.type = 'BarChart';
    this.data = this.arr;
    this.columnNames = ['Month', 'Sales'];
    this.options = {
                    colors: ['#00d1b2'],
                    backgroundColor: '#21313C',
                    is3D: true,
                    hAxis: {
                      textStyle:{color: '#FFF'}
                    },
                    vAxis: {
                      textStyle:{color: '#FFF'}
                    },
                    titleTextStyle: {
                      color: '#FFF'
                  },
                  nameTextStyle: {
                    color: "#FFF"
                  },
                  boderRadius:10,
                };
    this.width = 550;
    this.height = 500;

}

public sleep(ms:any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



}
