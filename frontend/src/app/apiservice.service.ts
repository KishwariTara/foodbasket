import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend

  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllData():Observable<any>
  {
    return this. _http.get(`${this.apiUrl}`);
  }

  //create data

  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>')
    return this._http.post(`${this.apiUrl}`,data);
  }

  //delete data

  deleteData(Id:any):Observable<any>
  {
    let ids = Id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update data
  updateData(data:any,Id:any):Observable<any>
  {
    let ids = Id;
    return this. _http.put(`${this.apiUrl}/${ids}`,data);
  }
}


