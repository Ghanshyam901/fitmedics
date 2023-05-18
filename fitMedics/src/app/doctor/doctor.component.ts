import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorService } from '../doctor.service';
import { SharedService } from '../shared.service';
import { LabtestService } from '../labtest.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  doctors: any;
  id : any;
  showForm: boolean = false;
  newDoctor: any = {};
  selectedDoctor: any;
  speciality: any;


  /////

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




  constructor(private docser : DoctorService ,private sharedService :SharedService,private service : LabtestService){

  }
  ngOnInit(): void {
    this.userData = this.sharedService['loggeduserdata'];
    this.extractUserData();
    this.getDoctorInfo();
  }

  getDoctorInfo()
  {
  return this.docser.getDoctorInfo().subscribe((data:any)=>
  {
    
    this.doctors=data;
  })
}

 delDoctor(id:any)
 {
 return this.docser.deleteDoctor(id).subscribe((data:any)=>
 {
 this.ngOnInit();
 })
}

 addDoctor(){
 this.showForm=true;
 }

 addNewDoctor() {
 return this.docser.addDoctor(this.newDoctor).subscribe((data: any) => {
 console.log(data);
 this.newDoctor = {};
 this.ngOnInit();
 });
}

 editDoctor(doc: any) {
 this.selectedDoctor = doc;
 }

 updateDoctor() {
 return this.docser.updateDoctor(this.selectedDoctor).subscribe((data: any) => {
 console.log(data);
 this.selectedDoctor = null;
 this.ngOnInit();
 });
}

 cancelUpdate(){
  this.selectedDoctor = null;
 }

 getDoctorByspeciality(speciality:any)
  {
  return this.docser.getDoctorDataBySpeciality(speciality).subscribe((data:any)=>
  {
    //this.ngOnInit();

    if(speciality.value == ""){
     this.getDoctorInfo()
    }else{
      this.doctors=data;
    }
   
  })



  


}



  
options = {
  "key": "rzp_test_M47RbQNk904fv5", // Enter the Key ID generated from the Dashboard
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Ainventory", //your business name
  "description": "Test Transaction",
  "image": "http://www.newdesignfile.com/postpic/2014/06/icon-air-airline-photos_63759.png",
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": "Gaurav Kumar", //your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
rzp1:any;

paying(){

  


this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
this.rzp1.open();

}
}
