import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { MembersComponent } from './components/members/members.component';
import { StartComponent } from './components/start/start.component';
import { QuestionsCreateComponent } from './components/questions/questions-create/questions-create.component';
import { DaysComponent } from './components/days/days.component';
import { QuestionsOverviewComponent } from './components/questions/questions-overview/questions-overview.component';
import { QuestionsAnswerComponent } from './components/questions/questions-answer/questions-answer.component';
import { DayCreateComponent } from './components/days/day-create/day-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MembersComponent,
    StartComponent,
    QuestionsCreateComponent,
    DaysComponent,
    QuestionsOverviewComponent,
    QuestionsAnswerComponent,
    DayCreateComponent
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
