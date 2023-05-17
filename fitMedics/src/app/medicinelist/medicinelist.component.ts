import { Component, OnInit } from '@angular/core';
import { MedicinelistService } from 'src/app/medicinelist.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit {
  Medicines: any;
  id : any;
  showForm: boolean = false;
  newMedicine: any = {};
  selectedMedicine: any;
  medicine_name: any;
  cartItems: any;
  //medicine: any;


  ////////////////is iadmin

  is_admin:any;
  userData: any;

  extractUserData(): void {
    this.is_admin = this.userData.is_admin
  }



  ngOnInit(): void  //page loading
  {

    this.userData = this.sharedService['loggeduserdata'];
  
    this.extractUserData();
    this.getMedicineInfo();

  }

  
  constructor(private medser : MedicinelistService ,private sharedService: SharedService)
  {
    this.cartItems = [];

  }
 
  getMedicineInfo()
  {
  return this.medser.getMedicineInfo().subscribe((data:any)=>
  {
    
    this.Medicines=data;
  })
}

  delMed(id:any)
  {
  return this.medser.deleteMedicine(id).subscribe((data:any)=>
  {
  this.ngOnInit();
  })
}

addMedicine(){
  this.showForm=true;
}

addNewMedicine() {
  return this.medser.addMedicine(this.newMedicine).subscribe((data: any) => {
    console.log(data);
    this.newMedicine = {};
    this.ngOnInit();
  });
}

editMedicine(medicine: any) {
  this.selectedMedicine = medicine;
  this.showForm=true;
}

updateMedicine() {
  return this.medser.updateMedicine(this.selectedMedicine).subscribe((data: any) => {
    console.log(data);
    this.selectedMedicine = null;
    this.ngOnInit();
  });
}

cancelUpdate(){
  this.selectedMedicine = null;
}

getMedicineByName(medicine_name:any)
  {
  return this.medser.getMedicineDataByName(medicine_name).subscribe((data:any)=>
  {
    //this.ngOnInit();
    this.Medicines=data;
  })
}

addToCart(medicine: any) {
  this.cartItems.push(medicine);
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}