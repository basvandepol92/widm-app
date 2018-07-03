import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {MatSnackBar} from "@angular/material";
import {MembersService} from "../../../services/members.service";
import {Member} from "../../../types/member";
import {LoadingStateService} from "../../../services/loading-state.service";


@Component({
  selector: 'app-questions-answer',
  templateUrl: './questions-answer.component.html',
  styleUrls: ['./questions-answer.component.css']
})
export class QuestionsAnswerComponent implements OnInit {
  public myForm: FormGroup;
  private dayId: String;
  private memberId: String;
  private answerObject;
  private members;
  public wieIsdeMol;
  private formSubmitted: boolean;
  public currentMember;
  public alreadyAnswered: boolean;

  static setQuestion(questionArray?) {
    return {
      question: questionArray.question,
      answer_a: questionArray.answer_a,
      answer_b: questionArray.answer_b,
      answer_c: questionArray.answer_c,
      answer_d: questionArray.answer_d,
      answered: ''
    }
  }

  constructor(private _fb: FormBuilder,
              private questionsService: QuestionsService,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar,
              private router: Router,
              private membersService: MembersService,
              private loadingStateService: LoadingStateService) {

    this.alreadyAnswered = false;
    this.setQuestions = this.setQuestions.bind(this);
  }

  ngOnInit() {
    this.loadingStateService.loading(true);
    this.formSubmitted = false;

    this.route.params.subscribe(params => {
      this.membersService.getMembersArray().then(members => {
        this.members = members;

        this.dayId = params['dayId'];
        this.memberId = params['memberId'];
        this.getQuestions();
        this.getCurrentMember();
      });
    });
  }

  getCurrentMember() {
    this.currentMember = this.members.filter(member => member._id === this.memberId)[0];
  }

  getQuestions() {
    this.questionsService.get(this.dayId, this.memberId)
      .subscribe(this.setQuestions);
  }

  initQuestions(question) {
    return this._fb.group(question);
  }

  setQuestions(questions) {
    if(questions && questions.already_answered === true) {
      this.snackbar.open(`Helaas je hebt deze vragen al beantwoord`, null, {
        duration: 1000
      });

      this.alreadyAnswered = true;
      this.loadingStateService.loading(false);
      return;
    }

    if (questions && questions.length > 0) {
      this.myForm = this._fb.group({
        questions: this._fb.array([])
      });

      const control = this.myForm.get(`questions`) as FormArray;
      questions.forEach(question => {
        const prevQuestion = QuestionsAnswerComponent.setQuestion(question);
        control.push(this.initQuestions(prevQuestion));
      });
    }

    this.loadingStateService.loading(false);
  }

  onSelectionChange(question, answer) {
    question.value.answered = answer;
    this.createAnswerObject()
  }

  selectMol(selectedMember) {
    this.wieIsdeMol = selectedMember._id;
    this.createAnswerObject();
  }

  createAnswerObject() {
    this.answerObject = this.myForm.value.questions
      .filter((question) => {
        return question.answered && question.answered !== ""
      })
      .map(question => {
        return question.answered
      })

    if(this.wieIsdeMol) {
      this.answerObject.push(this.wieIsdeMol);
    }
  }

  isFormValid() {
    return this.answerObject
      && this.answerObject.length === this.myForm.value.questions.length + 1;
  }

  save() {
    this.formSubmitted = true;
    this.loadingStateService.loading(true);

    this.questionsService.saveAnswers(this.answerObject, this.dayId, this.memberId)
      .subscribe(response => {

        this.formSubmitted = false;
        this.loadingStateService.loading(false);
        this.membersService.setMembersSucces(this.memberId);
      });
  }

  submitFormDisabled() {
    return !this.isFormValid() || this.formSubmitted
  }

  showNoDaysAdded() {
    return !this.myForm && this.alreadyAnswered === false;
  }

  showAlreadyAnswered() {
    return !this.myForm && this.alreadyAnswered === true;
  }

}
