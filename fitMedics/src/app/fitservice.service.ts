import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitserviceService {

  isUserLoggedIn = false;


  constructor(private httpclient : HttpClient) {
    this.isUserLoggedIn=false;
   }

   

   setIsUserLoggedIn(){
    this.isUserLoggedIn=true;
   }
   getIsUserLoggedIn(){
    return this.isUserLoggedIn;
   }


   addUser(data:any){
    return this.httpclient.post("api/register",data,{responseType:'text' as 'json'});
   }
   getallUser(){
    return this.httpclient.get("api/users");
   }

}
