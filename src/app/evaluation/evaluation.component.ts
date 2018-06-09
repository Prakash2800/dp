import { Component, OnInit } from '@angular/core';
import {GetQuestionService} from './service/getQuestion.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  op1: string;
  op2: string;
  index = 0;
  index2 = 0;
  public index2$: BehaviorSubject<number>;

  public questions = [];
  public questions2 = [
      {id: 1, question: 'aaa', option1: 'q1o1', option2: 'q1o2', option3: 'q1o3', option4: 'q4o4'},
      {id: 2, question: 'bbb', option1: 'q2o1', option2: 'q2o2', option3: 'q2o3', option4: 'q2o4'},
      {id: 3, question: 'ccc', option1: 'q3o1', option2: 'q3o2', option3: 'q3o3', option4: 'q3o4'},
      {id: 4, question: 'ddd', option1: 'q4o1', option2: 'q4o2', option3: 'q4o3', option4: 'q4o4'},
      {id: 5, question: 'eee', option1: 'q5o1', option2: 'q5o2', option3: 'q5o3', option4: 'q5o4'},
      {id: 6, question: 'fff', option1: 'q6o1', option2: 'q6o2', option3: 'q6o3', option4: 'q6o4'},
      {id: 7, question: 'ggg', option1: 'q7o1', option2: 'q7o2', option3: 'q7o3', option4: 'q7o4'}];



  constructor(
      private getQuestionService: GetQuestionService
  ) { }

  ngOnInit() {
      this.getQuestionService.getQuestions().subscribe(data => this.questions = data);
      console.log(this.questions2[0].option1);

      this.op1 = this.questions2[this.index].option1;
      this.op2 = this.questions2[this.index2].option1;

      this.index2$ = new BehaviorSubject(this.index2);
      this.index2$.subscribe((currentValue) => { this.index2 = currentValue; });

  }

  onPreviousClick() {
      this.index2 ++;
      this.op2 = this.questions2[this.index2].option1;
      this.index2$.next(this.index2);
      console.log(this.op2);
  }

  onNextClick() {
      this.index2 ++;
      this.op2 = this.questions2[this.index2].option1;
      this.index2$.next(this.index2);
  }

}
