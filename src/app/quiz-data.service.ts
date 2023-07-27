import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  private quizUrl = 'https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json';

  constructor(private http: HttpClient) { }

  getQuizData(): Observable<any> {
    return this.http.get(this.quizUrl);
  }
}
