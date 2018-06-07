import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./components/start/start.component";
import { QuestionsCreateComponent } from "./components/questions/questions-create/questions-create.component";
import { DaysComponent } from "./components/days/days.component";
import { QuestionsOverviewComponent } from "./components/questions/questions-overview/questions-overview.component";
import { QuestionsAnswerComponent } from "./components/questions/questions-answer/questions-answer.component"
import { ConfigurationComponent } from "./components/configuration/configuration.component";
import { ScoresOverviewComponent } from "./components/scores/scores-overview/scores-overview.component";

const routes : Routes = [
  {
    path: 'start',
    component: StartComponent
  },{
    path: 'members',
    component: ConfigurationComponent
  },{
    path: 'days/:memberId',
    component: DaysComponent
  },{
    path: 'scores',
    component: ScoresOverviewComponent
  },{
    path: 'questions',
    component: QuestionsOverviewComponent
  },{
    path: 'questions/:dayId',
    component: QuestionsCreateComponent
  },{
    path: 'questions/:memberId/:dayId',
    component: QuestionsAnswerComponent
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
