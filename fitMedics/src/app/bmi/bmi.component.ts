import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  title = 'BMIWebApp'
  name:string = ''
  height: any;
  weight: any;
  bmi: any;

  constructor() {
    
    
  }

  ngOnInit() {

  }

  calcBMI() {
    this.bmi = Math.round(this.weight / (this.height * this.height)) 
  }

}