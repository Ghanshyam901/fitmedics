import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

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
  // ---------------------

  trainer:any;
  speciality: any;
      showForm: boolean = false;
      newTrainer: any = {};
  selectedTrainer: any;
 

  constructor(private empser:TrainerServiceService,private sharedService: SharedService) {

  }

  ngOnInit(): void {
    this.userData = this.sharedService['loggeduserdata'];
    this.extractUserData();
    this.getTrainersInfo();
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





  getTrainersInfo() {
    return this.empser.getTrainerInfo().subscribe((data:any)=>
    {
      this.trainer=data;
      console.log(this.trainer);
    })
}
delTrainer(id: any): void {
  if (window.confirm('Are you sure you want to delete this trainer?')) {
    this.empser.deletetrainer(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
addTrainer(){
  this.showForm=true;
}

addNewTrainer() {
  return this.empser.addTrainer(this.newTrainer).subscribe((data: any) => {
    console.log(data);
    this.newTrainer= {};
    this.ngOnInit();
  });
}

editTrainer(trainer: any) {
  this.selectedTrainer = trainer;
}

updateTrainer() {
  return this.empser.updateTrainer(this.selectedTrainer).subscribe((data: any) => {
    console.log(data);
    this.selectedTrainer = null;
    this.ngOnInit();
  });
}
cancelUpdate() {
  this.selectedTrainer = null;
}

searchTrainersBySpeciality(speciality: string): void {
  this.empser.getTrainersBySpeciality(speciality)
    .subscribe((data: any) => {
      this.trainer = data;
    });
}

trackByTrainerId(index: number, trainer: any): string {
  return trainer.id; 
}
}
