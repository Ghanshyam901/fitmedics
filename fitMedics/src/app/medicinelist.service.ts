import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicinelistService {

  constructor(private httpclient: HttpClient) { 

  }

  getMedicineInfo()
  {
   return this.httpclient.get("api/doctor/list/");
  }

  addMedicine(medicine: any) {
    return this.httpclient.post("api/doctor/list/", medicine);
  }

  deleteMedicine(id:any)
  {
   return this.httpclient.delete("api/doctor/delete/"+id);
  }

  updateMedicine(medicine: any){
    return this.httpclient.put("api/doctor/list/", medicine);
  }
  getMedicineDataByName(medicine_name:any)
  {
    return this.httpclient.get("/api/doctor/list2/" +medicine_name);
  }
  
}
