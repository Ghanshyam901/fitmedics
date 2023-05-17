import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietServiceService {

  constructor(private httpclient: HttpClient) { 

  }

  getDietInfo() {
    return this.httpclient.get("api/diet");
  }
  deleteDiet(id:any){
    return this.httpclient.delete("/api/diet/"+id);
  }
  updateDiet(diet: any){
    return this.httpclient.put("/api/diet/", diet);
  }
  addDiet(diet: any) {
    return this.httpclient.post('/api/diet', diet);
  }

  getDietByType(diet_types: string){
    return this.httpclient.get("api/diet/dietType/"+diet_types);
  }

}
