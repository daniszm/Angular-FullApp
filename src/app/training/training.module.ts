import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTrainingComponent } from './new-training/new-training.component';
import { TrainingComponent } from './training.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingsComponent,
        TrainingComponent,
        StopTrainingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        AngularFirestoreModule,
    ],
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule {} 