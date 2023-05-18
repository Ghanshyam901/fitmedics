import { Component, OnInit } from '@angular/core';
import { FitserviceService } from '../fitservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  lookingFor = this.sharedService['lookingFor'];

  email: any;
  password: any;

  loginData: any;

  allUser: any[] = [];


  loggeduserdata: any;
  isloggendin = false;

  constructor(
    private fitService: FitserviceService,
    private route: Router,
    public sharedService: SharedService,private toast: NgToastService
    
  ) {}

  getAllUsers() {
    return this.fitService.getallUser().subscribe((data: any) => {
      this.allUser = data;
    });
  }

  loginDetails(formData: NgForm) {
    let nemail = formData.value.email;
    let npassword = formData.value.password;

    for (let user of this.allUser) {
      if (user.email === nemail && user.password === npassword) {
        const { password, ...userWithoutPassword } = user; // Exclude password from user object
        if (this.lookingFor == 'Doctor') {
          this.fitService.setIsUserLoggedIn();
          this.isloggendin = true;
          this.sharedService.loggeduserdata = userWithoutPassword;
          localStorage.setItem('loggeduser', JSON.stringify(userWithoutPassword));
          this.toast.success({detail:"SUCCESS",summary:'Login success Doctor',duration:5000});
          this.route.navigateByUrl('doctorhome');
          return;
        } else if (this.lookingFor == 'Trainer') {
          this.fitService.setIsUserLoggedIn();
          this.isloggendin = true;
          this.sharedService.loggeduserdata = userWithoutPassword;
          localStorage.setItem('loggeduser', JSON.stringify(userWithoutPassword));
          this.toast.success({detail:"SUCCESS",summary:'Login success Trainer',duration:5000});
          this.route.navigateByUrl('trainerhome');
          return;
        }
      }
    }
    this.toast.warning({detail:"ERROR",summary:'Wrong credentials',sticky:true});
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
