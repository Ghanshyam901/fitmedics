import { Component, OnInit } from '@angular/core';
import { FitserviceService } from '../fitservice.service';
import { user } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: any;
  isDuplicateEmail: boolean = false;

  formData: user = new user("", "", "", "", "", "", "", "");

  constructor(private fitservice: FitserviceService,private toastr : ToastrService) {
    this.submitReg(this.formData);
  }





  submitReg(formValue: any) {
    this.formData = formValue;
    console.log(this.formData);
  
    this.fitservice.addUser(this.formData).subscribe(
      () => {
        // Registration successful
        this.isDuplicateEmail = false;
        this.ngOnInit();
        this.toastr.success('Registration Successful!', 'Success');
      },
      (error) => {
        // Duplicate email error
        if (error && error.error && error.error.message === 'Email already exists') {
          this.isDuplicateEmail = true;
          alert("Email already exists. Please use a different email.");
        }
      }
    );
  }
  

  ngOnInit(): void {

  }

}
