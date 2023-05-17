import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {


  constructor(private httpclient: HttpClient) {
  }


  getTrainerInfo() {
    return this.httpclient.get("api/trainer");
  }

  deletetrainer(id:any){
    return this.httpclient.delete("/api/trainer/"+id);
  }
  updateTrainer(trainer: any){
    return this.httpclient.put("/api/trainer/", trainer);
  }
  addTrainer(trainer: any) {
    return this.httpclient.post('/api/trainer', trainer);
  }
  getTrainersBySpeciality(speciality: string){
    return this.httpclient.get("api/trainer/speciality/"+speciality);
  }
}




