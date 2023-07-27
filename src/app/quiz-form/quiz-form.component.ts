import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  quizQuestions: any = [];

  constructor(private quizDataService: QuizDataService) { }

  ngOnInit() {
    this.quizDataService.getQuizData().subscribe((data: any) => {
      this.quizQuestions = data;
    });
  }
}
