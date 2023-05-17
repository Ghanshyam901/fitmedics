import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  [x: string]: any;

  loggeduserdata: any;
  lookingFor:any;
}
