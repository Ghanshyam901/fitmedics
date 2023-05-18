import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-doctornav',
  templateUrl: './doctornav.component.html',
  styleUrls: ['./doctornav.component.css']
})
export class DoctornavComponent implements OnInit {

  constructor(private toast: NgToastService){

  }

  logout(){
    this.toast.success({detail:"LOG-OUT",summary:'Wish you a healthy life',duration:5000});
    localStorage.removeItem('loggeduser');

    
  }

  ngOnInit(): void {
      
  }
}
