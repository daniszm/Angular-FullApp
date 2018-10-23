import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../excercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingsService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingsService.getExcercise();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
