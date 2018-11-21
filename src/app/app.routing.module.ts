import { AuthGuard } from './auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}