import { Component, Input, OnInit } from '@angular/core';
import { elementAt, findIndex } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  answer: string = '';
  showIf: boolean = false;
  sub: any;

  constructor() { }

  ngOnInit() {
  }

  changeVal(value: any , i : any) {
    this.question.forEach((element: any) => {
        if(element.subQue !== undefined) {
          this.sub =  element.subQue.filter((sub:any) => sub.showIf === value);
          console.log(this.sub);
        }
    })










    // if (value === 'Apple') this.showIf = true
    // // else if (value === 'Atari' || value === 'Microsoft') this.showIf = false;
    // this.question.forEach((element: any) => {
    //   if(element.subQue !== undefined) {
        
    //     // this.sub =  element.subQue.filter((sub:any) => sub.showIf === value);
    //     console.log( this.sub)
    //     // element.subQue.forEach((subelement:any) => {
    //       // console.log(subelement.showIf ,value );
    //       // if(subelement.showIf === value) this.showIf = true
    //       // else this.showIf = false;
    //     // })
    //   }
    // });
  }
}
