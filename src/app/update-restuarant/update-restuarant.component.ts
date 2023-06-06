import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {
  id:any
  rName:any
  neighborhood:any
  photograph:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  address:any
  lat:any
  lng:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  comments:any
  reviewArray:any = []

  restId:any
  restBody :any

  constructor (private activatedRoute:ActivatedRoute,private restService:RestuarantApiService,private router:Router) {}

  ngOnInit(): void { 
    // get restuarant id
    this.activatedRoute.params
    .subscribe((data)=>{   
      this.restId = data['id']
    })

    // get restuarant details
    this.restService.viewRestuarant(this.restId)
    .subscribe((result)=>{
     this.restBody = result
     console.log(this.restBody)
    })
  }

  updateRestuarant(form:any){
    let updateProduct = {
      id:parseInt(form.value.id),
      name:form.value.rName,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng : {
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours: {
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews : [
        {
          name:this.rvname,
          date: this.date,
          rating :parseInt(this.rating),
          comments:this.comments
        }
      ]    
    }
    console.log(updateProduct) 
    this.restService.updateRestuarant(this.restId,updateProduct)
    .subscribe((data)=> {
      alert('Restuarant details updated Successfully !!!')
      this.router.navigateByUrl('')
    })
  }
}
