import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { MembersComponent } from "./components/members/members.component";
import { StartComponent } from "./components/start/start.component";
import { QuestionsCreateComponent } from "./components/questions/questions-create/questions-create.component";
import { DaysComponent } from "./components/days/days.component";
import { QuestionsOverviewComponent } from "./components/questions/questions-overview/questions-overview.component";
import { QuestionsAnswerComponent } from "./components/questions/questions-answer/questions-answer.component"
import { DayCreateComponent } from "./components/days/day-create/day-create.component";

const routes : Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },{
    path: 'members',
    component: MembersComponent
  },{
    path: 'start',
    component: StartComponent
  },{
    path: 'days/create',
    component: DayCreateComponent
  },{
    path: 'days/:memberId',
    component: DaysComponent
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
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
