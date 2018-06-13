import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar}  from "@angular/material";

import {QuestionsService} from "../../../services/questions.service";


@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {
  public myForm: FormGroup;
  public dayId: String;
  public questions: Array<String>;
  public formSubmitted: boolean;

  get formData() {
    return <FormArray>this.myForm.get('questions');
  }

  static setQuestion(questionArray?) {
    const question = questionArray ? questionArray.question : "";
    const answer_a = questionArray ? questionArray.answer_a : "";
    const answer_b = questionArray ? questionArray.answer_b : "";
    const answer_c = questionArray ? questionArray.answer_c : "";
    const answer_d = questionArray ? questionArray.answer_d : "";
    const correct_answer = questionArray ? questionArray.correct_answer : "";

    return {
      question: [question, Validators.required],
      answer_a: [answer_a, Validators.required],
      answer_b: [answer_b, Validators.required],
      answer_c: [answer_c, Validators.required],
      answer_d: [answer_d, Validators.required],
      correct_answer: [correct_answer, Validators.required]
    }
  }

  constructor(private _fb: FormBuilder,
              private questionsService: QuestionsService,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar) {

    this.setPreviousQuestions = this.setPreviousQuestions.bind(this);
    this.questionsSaved = this.questionsSaved.bind(this);
  }


  ngOnInit() {
    this.formSubmitted = false;

    const question = QuestionsCreateComponent.setQuestion();
    this.myForm = this._fb.group({
      questions: this._fb.array([
        this.initQuestions(question),
      ])
    });

    this.route.params.subscribe(params => {
      this.dayId = params['dayId'];

      this.getPreviousQuestions();
    });
  }

  initQuestions(question) {
    return this._fb.group(question);
  }

  addQuestion() {
    const question = QuestionsCreateComponent.setQuestion();
    const control = this.myForm.get(`questions`) as FormArray;
    control.push(this.initQuestions(question));
  }

  removeQuestion(i: number) {
    const control = this.myForm.get(`questions`) as FormArray;
    control.removeAt(i);
  }

  save(model) {
    this.formSubmitted = true;
    this.questionsService.create(model.value, this.dayId)
      .subscribe(this.questionsSaved);
  }

  questionsSaved() {
    this.formSubmitted = false;
    this.snackbar.open(`Vragen zijn opgeslagen`, null, {
      duration: 1000
    });
  }

  getPreviousQuestions() {
    this.questionsService.get(this.dayId)
      .subscribe(this.setPreviousQuestions);
  }

  setPreviousQuestions(questions) {
    if (questions && questions.length > 0) {
      this.myForm = this._fb.group({
        questions: this._fb.array([])
      });

      const control = this.myForm.get(`questions`) as FormArray;
      questions.forEach(question => {
        const prevQuestion = QuestionsCreateComponent.setQuestion(question);
        control.push(this.initQuestions(prevQuestion));
      });
    }
  }

  submitFormDisabled() {
    return !this.myForm.valid || this.formSubmitted
  }
}


