import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MembersComponent } from './components/members/members.component';
import { StartComponent } from './components/start/start.component';
import { QuestionsCreateComponent } from './components/questions/questions-create/questions-create.component';
import { AnswersComponent } from "./components/questions/controls/answers.component";
import { DaysComponent } from './components/days/days.component';
import { QuestionsOverviewComponent } from './components/questions/questions-overview/questions-overview.component';
import { QuestionsAnswerComponent } from './components/questions/questions-answer/questions-answer.component';
import { DayCreateComponent } from './components/days/day-create/day-create.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MembersComponent,
    StartComponent,
    QuestionsCreateComponent,
    DaysComponent,
    QuestionsOverviewComponent,
    QuestionsAnswerComponent,
    DayCreateComponent,
    AnswersComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
