import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TrainerComponent } from './trainer/trainer.component';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DietComponent } from './diet/diet.component';
import { LabtestComponent } from './labtest/labtest.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { ContactdoctorComponent } from './contactdoctor/contactdoctor.component';
import { ContacttrainerComponent } from './contacttrainer/contacttrainer.component';
import { AbouttrainerComponent } from './abouttrainer/abouttrainer.component';
import { DoctoruserprofileComponent } from './doctoruserprofile/doctoruserprofile.component';
import { TraininguserprofileComponent } from './traininguserprofile/traininguserprofile.component';
import { BmiComponent } from './bmi/bmi.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'trainer', component: TrainerComponent },
  {path:"bmicalc",component:BmiComponent},

  
  {path:"profiled",component:DoctoruserprofileComponent},
  {path:"profilet",component:TraininguserprofileComponent},

  { path: 'trainer', component: TrainerComponent },
  { path: 'diet', component: DietComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'aboutusd', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'cart', component: CartComponent },
  {path:"aboutust",component:AbouttrainerComponent},

  { path: 'contacttr', component: ContacttrainerComponent },
  { path: 'contactd', component: ContactdoctorComponent },


  { path: 'trainer/profile', component: UserprofileComponent },
  {
    path: 'trainerhome',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'trainer', pathMatch: 'full' }, // Default child route
      { path: 'trainer', component: TrainerComponent },
      { path: 'diet', component: DietComponent },
      { path: 'exercise', component: ExerciseComponent },
      {path:"aboutust",component:AbouttrainerComponent},
      { path: 'contacttr', component: ContacttrainerComponent },
      { path: 'cart', component: CartComponent },
      {path:"profilet",component:TraininguserprofileComponent},
      {path:"bmicalc",component:BmiComponent}
    ],
  },



  { path: 'doctor', component: DoctorComponent },
  { path: 'labtest', component: LabtestComponent },
  { path: 'aboutusd', component: AboutusComponent },
  { path: 'contacttr', component: ContacttrainerComponent },
  { path: 'cart', component: CartComponent },
  { path: 'medicinelist', component: MedicinelistComponent },
  
 
  {path:"profiled",component:DoctoruserprofileComponent},
  



  {
    path: 'doctorhome',
    component: Homepage1Component,
    children: [
      { path: '', redirectTo: 'doctor', pathMatch: 'full' }, // Default child route
      { path: 'doctor', component: DoctorComponent },
      { path: 'labtest', component: LabtestComponent },
      { path: 'aboutusd', component: AboutusComponent },
      { path: 'contactd', component: ContactdoctorComponent },
      { path: 'cart', component: CartComponent },
      { path: 'medicinelist', component: MedicinelistComponent },
      {path:"profiled",component:DoctoruserprofileComponent},
      {path:"bmicalc",component:BmiComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
