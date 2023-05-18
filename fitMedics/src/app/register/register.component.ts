import { Component, OnInit } from '@angular/core';
import { FitserviceService } from '../fitservice.service';
import { user } from '../user';
import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: any;
  isDuplicateEmail: boolean = false;
  dublicateEmail :boolean=false;

  formData: user = new user("", "", "", "", "", "", "", "");

  constructor(private fitservice: FitserviceService, private toast: NgToastService) {
    this.submitReg(this.formData);
  }





  submitReg(formValue: any) {
    this.formData = formValue;
    console.log(this.formData);
  
    this.fitservice.addUser(this.formData).subscribe((data:any) => {
        // Registration successful
        
        this.isDuplicateEmail = false;
        this.ngOnInit();
       
        this.toast.success({detail:"SUCCESS",summary:'Regestration success',duration:5000});
      },
      (error) => {
        // Duplicate email error
        if (error.error && error.error.message === 'Email already exists') {
        
          this.isDuplicateEmail = true;
          this.toast.error({detail:"ERROR",summary:'Duplicate email / email already exists',sticky:true});
      
        }
       
        // this.toast.success({detail:"ERROR",summary:'Dublicate email / email already exist',sticky:true});
      }
      
      
       
    );
   
  }
  

  ngOnInit(): void {
    
  }

}
