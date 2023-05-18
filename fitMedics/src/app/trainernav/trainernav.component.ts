import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-trainernav',
  templateUrl: './trainernav.component.html',
  styleUrls: ['./trainernav.component.css']
})
export class TrainernavComponent implements OnInit {

  constructor(private toast: NgToastService){

  }

  logout(){
    this.toast.success({detail:"LOG-OUT",summary:'Wish you a healthy life',duration:5000});
    localStorage.removeItem('loggeduser');
    
  }

  ngOnInit(): void {
      
  }
 
}
