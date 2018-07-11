import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatSelectModule, MatGridListModule,MatSnackBarModule, MatButtonModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatMenuModule,MatToolbarModule, MatIconModule, MatCardModule, MatDatepickerModule, MatInputModule, MatListModule, MatExpansionModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMomentDateModule } from '@angular/material-moment-adapter'

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
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ScoresOverviewComponent } from './components/scores/scores-overview/scores-overview.component';
import { ScoresPageComponent } from './components/scores/scores-page/scores-page.component';
import { ScoresWidmComponent } from './components/scores/scores-widm/scores-widm.component';
import { ScoresTopComponent } from './components/scores/scores-top/scores-top.component';
import { LoadingStateComponent } from './components/generic/loading-state/loading-state.component';
import { MemberSuccessComponent } from './components/members/member-success/member-success.component';
import { ScoresTotalCorrectWidmComponent } from './components/scores/scores-total-correct-widm/scores-total-correct-widm.component';
import { BackButtonComponent } from './components/generic/back-button/back-button.component';
import { ScoresAnimationComponent } from './components/scores/scores-animation/scores-animation.component';

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
    AnswersComponent,
    ConfigurationComponent,
    ScoresOverviewComponent,
    ScoresPageComponent,
    ScoresWidmComponent,
    ScoresTopComponent,
    LoadingStateComponent,
    MemberSuccessComponent,
    ScoresTotalCorrectWidmComponent,
    BackButtonComponent,
    ScoresAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    FlexLayoutModule,
    MatProgressSpinnerModule, MatSelectModule, MatGridListModule, MatSnackBarModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatInputModule, MatToolbarModule, MatIconModule, MatCardModule, MatDatepickerModule, MatListModule, MatExpansionModule, MatRadioModule, MatTabsModule, MatTableModule
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
