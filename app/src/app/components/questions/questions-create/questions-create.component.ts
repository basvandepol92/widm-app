import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {
  orderForm: FormGroup;
  items: any[] = [];

  constructor(private fb: FormBuilder) {}

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: '',
      email: '',
      items: this.fb.array([ this.createItem() ])
    });
  }

}


