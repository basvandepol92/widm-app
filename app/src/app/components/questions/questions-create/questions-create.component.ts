import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      questions: this._fb.array([
        this.initQuestions(),
      ])
    });
  }

  initQuestions() {
    return this._fb.group({
      question: ['', Validators.required],
      answer_a: ['', Validators.required],
      answer_b: ['', Validators.required],
      answer_c: ['', Validators.required],
      answer_d: ['', Validators.required]
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['questions'];
    control.push(this.initQuestions());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['questions'];
    control.removeAt(i);
  }

  save(model) {
    console.log(model);
  }

}


