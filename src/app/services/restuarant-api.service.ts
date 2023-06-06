import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestuarantApiService {

  search = new BehaviorSubject("")

  constructor(private api:HttpClient) { }
  
  // to get all resuarant details api call
  allRestuarantsList(){
    // api call
     return this.api.get('http://localhost:3005/restaurants')
  }

  // to get only user requested restuarant
  viewRestuarant (restId:any) {
   return this.api.get('http://localhost:3005/restaurants'+restId)
  }

  // add a new restuarant
  addRestuarant (restBody:any) {
   return this.api.post('http://localhost:3005/restaurants',restBody)
  }

  // update a particular restuarant api - put
  updateRestuarant(restId:any,restBody:any) {
   return this.api.put('http://localhost:3005/restaurants/'+restId,restBody)
  }

  // delete a particular restuarant api - delete

  deleteRestuarant(restId:any) {
    return this.api.delete('http://localhost:3005/restaurants'+restId)
  }



}
