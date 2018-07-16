import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private score;
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() showFinaleEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

  private scoresUrl = `${environment.url}/api/scores`;
  private totalCorrectWidmScores = `${environment.url}/api/scores/total-widm-scores`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  getScores() {
    return this.http.get(this.scoresUrl, this.httpOptions)
  }

  getTotalCorrectWIDM() {
    return this.http.get(this.totalCorrectWidmScores, this.httpOptions)
  }

  showScoreAnimation(score) {
    this.score = score;
    this.change.emit(this.score);
  }

  showFinale(showFinale) {
    this.showFinaleEmitter.emit(showFinale);
  }
}

