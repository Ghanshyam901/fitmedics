
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TrainerComponent } from './trainer/trainer.component';

import { UserprofileComponent } from './userprofile/userprofile.component';

import { CartComponent } from './cart/cart.component';

import { DietComponent } from './diet/diet.component';

import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { Homepage1Component } from './homepage1/homepage1.component';

import { DoctorComponent } from './doctor/doctor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


import { LabtestComponent } from './labtest/labtest.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { TrainernavComponent } from './trainernav/trainernav.component';
import { DoctornavComponent } from './doctornav/doctornav.component';
import { ContactdoctorComponent } from './contactdoctor/contactdoctor.component';
import { ContacttrainerComponent } from './contacttrainer/contacttrainer.component';
import { AbouttrainerComponent } from './abouttrainer/abouttrainer.component';
import { DoctoruserprofileComponent } from './doctoruserprofile/doctoruserprofile.component';
import { TraininguserprofileComponent } from './traininguserprofile/traininguserprofile.component';
import { FooterComponent } from './footer/footer.component';
import { BmiComponent } from './bmi/bmi.component';

import { ToastrModule } from 'ngx-toastr';
import { NgToastModule } from 'ng-angular-popup';




// import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    DoctorComponent,
    TrainerComponent,

    UserprofileComponent,
    AboutusComponent,
    CartComponent,
    ContactusComponent,
    DietComponent,

    HomepageComponent,
    NavbarComponent,
    ExerciseComponent,
    Homepage1Component,
    LabtestComponent,
   MedicinelistComponent,
   TrainernavComponent,
   DoctornavComponent,
   ContactdoctorComponent,
   ContacttrainerComponent,
   AbouttrainerComponent,
   DoctoruserprofileComponent,
   TraininguserprofileComponent,
   FooterComponent,
   BmiComponent,
  
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(), // Add this line
    NgToastModule



    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
