import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userData: any;
  firstName: any;
  lastName: any;
  email: any;
  contactNumber: any;
  bloodGroup: any;
  weight: any;
  height: any;
  is_admin:any
  password: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userData = this.sharedService['loggeduserdata'];
    this.extractUserData();
  }

  extractUserData(): void {
    this.firstName = this.userData.firstName;
    this.lastName = this.userData.lastName;
    this.email = this.userData.email;
    this.contactNumber = this.userData.contact_number;
    this.bloodGroup = this.userData.blood_group;
    this.weight = parseFloat(this.userData.weight);
    this.height = parseFloat(this.userData.height);
    this.password = this.userData.password;
    this.is_admin = this.userData.is_admin
  }
}
