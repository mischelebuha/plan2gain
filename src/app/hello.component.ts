import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { Workout } from './workout.entity'

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {

  workouts: Workout[];

  constructor(private backendService: BackendService) {
    backendService.GetWorkouts()
  }
  ngOnInit() {
    this.backendService.GetWorkouts().subscribe( (workouts: Workout[]) => this.workouts = workouts);
  }
  @Input() name: string;
}
