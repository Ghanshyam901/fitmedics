import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctornav',
  templateUrl: './doctornav.component.html',
  styleUrls: ['./doctornav.component.css']
})
export class DoctornavComponent implements OnInit {

  constructor(){

  }

  logout(){
    localStorage.removeItem('loggeduser');
    
  }

  ngOnInit(): void {
      
  }
}
