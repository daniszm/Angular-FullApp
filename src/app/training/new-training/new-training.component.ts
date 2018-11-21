import { UIService } from './../../shared/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../excercise.model';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  isLoading = true;
  private exerciseSubscription: Subscription;
  private loadingSubs: Subscription;

  constructor(private trainingService: TrainingService, private uiService: UIService) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => this.isLoading = isLoading);

    this.exerciseSubscription = this.trainingService.exercisesChanged
    .subscribe(
      exercises => {
        this.exercises = exercises;
      });
    this.fetchExercises(); 
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.trainingService.fetchExcercise();
  }

}
