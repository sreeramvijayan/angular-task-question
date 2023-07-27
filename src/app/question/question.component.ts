import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  answer: string = '';
  showIf: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeVal(value: any) {
    if (value === 'Apple') this.showIf = true
    else if (value === 'Atari' || value === 'Microsoft') this.showIf = false;
  }
}
