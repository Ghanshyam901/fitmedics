import { Component, OnInit } from '@angular/core';
import { ExerciseServService } from '../exercise-serv.service';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit{
  exercise: any;
  showForm: boolean = false;
  newExercise: any = {};
selectedExercise: any;
workout_types:any;
 
  

   is_admin:any;
userData: any;

constructor(private exerciseService:ExerciseServService,private sharedService: SharedService) {

}

extractUserData(): void {
  this.is_admin = this.userData.is_admin
}





  ngOnInit(): void {
    this.userData = this.sharedService['loggeduserdata'];
    this.extractUserData();
    this.getExerciseInfo();
  }

    getExerciseInfo(){
    return this.exerciseService.getExerciseInfo().subscribe((data: any) => 
    {
      this.exercise = data;
      console.log(this.exercise);
  });

}
getImageUrl(workoutType: string): string {
  let imageUrl = '';

  switch (workoutType) {
    case 'Strength Training':
      imageUrl = 'assets/trainer/Strength_training.jpg';
      break;
    case 'Cardio':
      imageUrl = 'assets/trainer/Cardio.jpg';
      break;
    case 'CrossFit':
      imageUrl = 'assets/trainer/CrossFit.jpg';
      break;
      case 'Yoga':
      imageUrl = 'assets/trainer/Yoga.jpg';
      break;
      case 'HIIT':
      imageUrl = 'assets/trainer/HIIT.jpg';
      break;
   
    default:
      imageUrl = 'assets/trainer/default.png';
      break;
  }

  return imageUrl;
}
getLearnMoreUrl(workoutType: string): string {
  if (workoutType === 'Strength Training') {
    return 'https://en.wikipedia.org/wiki/Strength_training';
  } else if (workoutType === 'Cardio') {
    return 'https://en.wikipedia.org/wiki/Aerobic_exercise';
  } else if (workoutType === 'CrossFit') {
    return 'https://en.wikipedia.org/wiki/CrossFit';
  }else if (workoutType === 'Yoga') {
    return 'https://en.wikipedia.org/wiki/Yoga';
  }else if (workoutType === 'HIIT') {
    return 'https://en.wikipedia.org/wiki/High-intensity_interval_training';
  }
 
  return 'https://en.wikipedia.org/wiki/Exercise';
}
delExercise(id: any): void {
  if (window.confirm('Are you sure you want to delete this exercise?')) {
    this.exerciseService.deleteExercise(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
 addExercise(){
  this.showForm=true;
}

addNewExercise() {
  return this.exerciseService.addExercise(this.newExercise).subscribe((data: any) => {
    console.log(data);
    this.newExercise= {};
    this.ngOnInit();
  });
}

editExercise(exercise: any) {
  this.selectedExercise = exercise;
}

updateExercise() {
  return this.exerciseService.updateExercise(this.selectedExercise).subscribe((data: any) => {
    console.log(data);
    this.selectedExercise = null;
    this.ngOnInit();
  });
}
cancelUpdate() {
  this.selectedExercise = null;
}


getExerciseByType(workout_types: any): void {
  this.exerciseService.getExerciseByType(workout_types)
    .subscribe((data: any) => {
      this.exercise = data;
    });
}


}
