import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServService {

  constructor(private httpclient: HttpClient) {
    
   }

   getExerciseInfo() {
    return this.httpclient.get("api/exercise");
  }
  deleteExercise(id:any){
    return this.httpclient.delete("/api/exercise/"+id);
  }
  updateExercise(exercise: any){
    return this.httpclient.put("/api/exercise/", exercise);
  }
  addExercise(exercise: any) {
    return this.httpclient.post('/api/exercise', exercise);
  }

  getExerciseByType(workout_types: string){
    return this.httpclient.get("api/exercise/workoutTypes/"+workout_types);
  }
 
}
