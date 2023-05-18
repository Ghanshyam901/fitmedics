import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactdoctor',
  templateUrl: './contactdoctor.component.html',
  styleUrls: ['./contactdoctor.component.css']
})
export class ContactdoctorComponent implements OnInit {




  constructor(){

  }

  formdata: any;

  submitForm(form: any) {
    this.formdata = form;
    console.log(this.formdata);

    // Perform actions with the form data (e.g., send it to a server)
    // ...
  }

  ngOnInit(): void {
    this.submitForm;
  }

}
