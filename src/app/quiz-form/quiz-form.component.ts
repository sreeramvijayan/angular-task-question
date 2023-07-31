import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  quizQuestions: any = [
    {
      "queType": "Main",
      "type": "dropdown",
      "question": "Which company was established in by Bill Gates ?",
      "options": ["Apple", "Microsoft", "Atari"],
      "subQue": [
        {
          "queType": "Sub",
          "showIf": "Microsoft",
          "type": "dropdown",
          "question": "What is the most common way to iterate through an array ?",
          "options": ["For loop", "If Statements"]
        },
        {
          "queType": "Sub",
          "showIf": "Apple",
          "type": "textinput",
          "question": "Which type of code is represented in 0 and 1 ?",
          "options": []
        }
      ]
    },
    {
      "queType": "Main",
      "type": "dropdown",
      "question": "What is use for CSS ?",
      "options": ["Styling websites", "JS logic", "Database"]
    }
  ]

  constructor(private quizDataService: QuizDataService) { }

  ngOnInit() {
    // this.quizDataService.getQuizData().subscribe((data: any) => {
    //   this.quizQuestions = data;
    // });
  }
}
