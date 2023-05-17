import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

function _window() : any {
  return window;
}



@Injectable({
  providedIn: 'root'
})
export class LabtestService {

  constructor(private httpclient: HttpClient) { 

  }

  getTestInfo()
  {
   return this.httpclient.get("api/doctor/labtest/");
  }

  addTest(test: any) {
    return this.httpclient.post("api/doctor/labtest/", test);
  }

  deleteTest(id:any)
  {
   return this.httpclient.delete("api/doctor/labtest/"+id);
  }

  updateTest(test: any){
    return this.httpclient.put("api/doctor/labtest/", test);
  }
  getLabTestDataByName(test_name:any)
  {
    return this.httpclient.get("/api/doctor/labtest1/" +test_name);
  }

 
  get nativeWindow() : any {
    return _window();
  }
}

