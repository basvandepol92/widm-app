import {Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../../services/questions.service";
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

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
              private location: Location) {

    this.setQuestions = this.setQuestions.bind(this);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dayId = params['dayId'];
      this.memberId = params['memberId'];
      this.getQuestions();
    });
  }

  getQuestions() {
    this.questionsService.get(this.dayId)
      .subscribe(this.setQuestions);
  }

  initQuestions(question) {
    return this._fb.group(question);
  }

  setQuestions(questions) {
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
  }

  onSelectionChange(question, answer) {
    question.value.answered = answer;
    this.createAnswerObject()
  }

  createAnswerObject() {
    this.answerObject = this.myForm.value.questions
      .filter((question) => {
        return question.answered && question.answered !== ""
      })
      .map(question => {
        return question.answered
      })
  }

  isFormValid() {
    return this.answerObject && this.answerObject.length === this.myForm.value.questions.length
  }

  save() {
    console.log(this.answerObject);
    this.questionsService.saveAnswers(this.answerObject, this.dayId, this.memberId)
      .subscribe(response => {
        if(response.status === 200) {
            console.log('saved');
            //Change location
          }
      });
  }


}
