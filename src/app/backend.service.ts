import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from './workout.entity'



@Injectable()
export class BackendService {

  configUrl = 'assets/training.json';


  constructor(private http: HttpClient) { }

  GetWorkouts() {
    return this.http.get<Workout[]>(this.configUrl);
  }
}