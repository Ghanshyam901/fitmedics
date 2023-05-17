import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userData = this.sharedService['loggeduserdata'];
  role:any;
  constructor (private sharedService : SharedService,){

  }

  ngOnInit(): void {
    this.logRole(this.role);
  }

  logRole(val: any) {
    this.role =val
    this.sharedService.lookingFor=this.role
    console.log(this.role);
  }


}
