// address.component.ts

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.component.html'
})
export class AnswersComponent {
  // we will pass in address from App component
  @Input('group')
  public questionForm: FormGroup;
}
