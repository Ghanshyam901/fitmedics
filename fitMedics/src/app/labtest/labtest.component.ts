import { Component, OnInit } from '@angular/core';
import { LabtestService } from '../labtest.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent implements OnInit {
  labtests: any;
  showForm: boolean = false;
  newTest: any = {};
  selectedTest: any;
  cartItems: any;
  test_name: any;

  /// is admin

  is_admin:any;
  userData: any;

  extractUserData(): void {
    this.is_admin = this.userData.is_admin
  }


  constructor(private labser: LabtestService,private sharedService :SharedService) { 

  
  }
  ngOnInit(): void {

    this.userData = this.sharedService['loggeduserdata'];
    this.extractUserData();

    this.labser.getTestInfo().subscribe((data: any) => {
      this.getTestInfo();
  });

}
getImageUrl(LabTestName: string): string {
  let imageUrl = '';

  switch (LabTestName) {
    case 'Blood Test':
      imageUrl = 'assets/doctor/Bloodtest.jpg';
      break;
    case 'Full Body Test':
      imageUrl = 'assets/doctor/fullbody.png';
      break;
    case 'X-Ray':
    imageUrl = 'assets/doctor/hand_xray.jpg'; 
      break;
      case 'CT Scan':
      imageUrl = 'assets/doctor/ctscan.jpg';
      break;
      case 'MRI':
      imageUrl = 'assets/doctor/mri_scan.png';
      break;
   
    default:
      imageUrl = 'assets/doctor/default_Diet.png';
      break;
  }

  return imageUrl;
}

addToCart(LabTests: any): void {
  this.cartItems.push(LabTests);
}

getTestInfo()
  {
  return this.labser.getTestInfo().subscribe((data:any)=>
  {
    
    this.labtests=data;
  })
}

 delTest(id:any)
 {
 return this.labser.deleteTest(id).subscribe((data:any)=>
 {
 this.ngOnInit();
 })
}

  addTest(){
    this.showForm=true;
  }
 
  addNewTest() {
  return this.labser.addTest(this.newTest).subscribe((data: any) => {
  console.log(data);
  this.newTest = {};
  this.ngOnInit();
  });
 }

 editTest(labtests: any) {
 this.selectedTest = labtests;
 }

 updateTest() {
 return this.labser.updateTest(this.selectedTest).subscribe((data: any) => {
 console.log(data);
 this.selectedTest = null;
 this.ngOnInit();
 });
}

 cancelUpdate(){
  this.selectedTest = null;
 }

 getLabTestByName(test_name:any)
  {
  return this.labser.getLabTestDataByName(test_name).subscribe((data:any)=>
  {
    //this.ngOnInit();
    this.labtests=data;
  })
}



options = {
  "key": "rzp_test_M47RbQNk904fv5", // Enter the Key ID generated from the Dashboard
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Fitmedics", //your business name
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
this.rzp1 = new this.labser.nativeWindow.Razorpay(this.options);
this.rzp1.open();

}





}
