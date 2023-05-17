import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainernav',
  templateUrl: './trainernav.component.html',
  styleUrls: ['./trainernav.component.css']
})
export class TrainernavComponent implements OnInit {

  constructor(){

  }

  logout(){
    localStorage.removeItem('loggeduser');
    
  }

  ngOnInit(): void {
      
  }
 
}
