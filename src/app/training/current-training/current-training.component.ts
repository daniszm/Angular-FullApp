import { TrainingService } from './../training.service';
import { StopTrainingComponent } from './stop-training.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;
  trainingName: string;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
    this.trainingName = this.trainingService.name;
  }

  startOrResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step)
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
    }
  });
    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.trainingExit.emit();
    } else {
      this.startOrResumeTimer();
    }
  }) 
  }

}
