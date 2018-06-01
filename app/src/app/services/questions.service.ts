import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})

export class QuestionsService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };
  private questionsUrl = `${environment.url}/api/questions`;

  create(questions, dayId: String) {
    return this.http.put(`${this.questionsUrl}/${dayId}`, questions, this.httpOptions);
  }

  get(dayId: String) {
    return this.http.get(`${this.questionsUrl}/${dayId}`, this.httpOptions);
  }

  saveAnswers(answers, dayId, memberId) {
    return this.http.post(`${this.questionsUrl}/${dayId}/${memberId}`, answers, this.httpOptions);
  }

}
