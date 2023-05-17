import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpclient: HttpClient) { 

  }

  getDoctorInfo()
  {
   return this.httpclient.get("api/doctor/doctors/");
  }

  addDoctor(doc: any) {
    return this.httpclient.post("api/doctor/doctors/", doc);
  }

  deleteDoctor(id:any)
  {
   return this.httpclient.delete("api/doctor/doctors/"+id);
  }

  updateDoctor(doc: any){
    return this.httpclient.put("api/doctor/doctors/", doc);
  }

  getDoctorDataBySpeciality(speciality:any)
  {
    return this.httpclient.get("api/doctor/doctors/speciality/"+speciality);
  }
  
}
