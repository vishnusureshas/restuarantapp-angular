
import { Component,OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {
  
  // restName ="Resto cafe Calicut"
  // name = "Enter your name"
  restuarantsLists:any
  lDate:any
  filterString:any=""

  constructor(private restApi:RestuarantApiService) { }

  ngOnInit():void {
    // asynchronous
    this.restApi.allRestuarantsList()
    .subscribe((result)=>{
      console.log(result)
      this.restuarantsLists = result
    })

    // To get search term from service

    this.lDate = new Date()
    this.restApi.search
    .subscribe((data)=> {
      this.filterString = data
      // console.log(this.filterString)
    })
  }

}
