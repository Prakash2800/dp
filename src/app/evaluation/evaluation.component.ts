import { Component, OnInit } from '@angular/core';
import {GetQuestionService} from './service/getQuestion.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  question: string;
  op1: string;
  op2: string;
  op3: string;
  op4: string;
  index = 0;
  disableButtonPrevious = true;
  disableButtonNext = false;
  questionsLength: number;

  public index$: BehaviorSubject<number>;

  public questions = [];
  public questions2 = [
      {id: 1, question: 'aaa', option1: 'q1o1', option2: 'q1o2', option3: 'q1o3', option4: 'q1o4', answer: 'a'},
      {id: 2, question: 'bbb', option1: 'q2o1', option2: 'q2o2', option3: 'q2o3', option4: 'q2o4', answer: 'b'},
      {id: 3, question: 'ccc', option1: 'q3o1', option2: 'q3o2', option3: 'q3o3', option4: 'q3o4', answer: 'd'},
      {id: 4, question: 'ddd', option1: 'q4o1', option2: 'q4o2', option3: 'q4o3', option4: 'q4o4', answer: 'c'},
      {id: 5, question: 'eee', option1: 'q5o1', option2: 'q5o2', option3: 'q5o3', option4: 'q5o4', answer: 'r'},
      {id: 6, question: 'fff', option1: 'q6o1', option2: 'q6o2', option3: 'q6o3', option4: 'q6o4', answer: 'a'},
      {id: 7, question: 'ggg', option1: 'q7o1', option2: 'q7o2', option3: 'q7o3', option4: 'q7o4', answer: 'b'}];

  constructor(
      private getQuestionService: GetQuestionService
  ) { }

  ngOnInit() {
      this.getQuestionService.getQuestions().subscribe(data => this.questions = data);
      console.log(this.questions2[0].option1);

      this.question = this.questions2[this.index].question;
      this.op1 = this.questions2[this.index].option1;
      this.op2 = this.questions2[this.index].option2;
      this.op3 = this.questions2[this.index].option3;
      this.op4 = this.questions2[this.index].option4;

      this.index$ = new BehaviorSubject(this.index);
      this.index$.subscribe((currentValue) => { this.index = currentValue; });

      this.questionsLength = this.questions2.length;
  }

  updateQuestion(val: number) {
      this.question = this.questions2[val].question,
      this.op1 = this.questions2[val].option1;
      this.op2 = this.questions2[val].option2;
      this.op3 = this.questions2[val].option3;
      this.op4 = this.questions2[val].option4;
  }

  onPreviousClick() {
      this.index --;
      this.updateQuestion(this.index);
      this.index$.next(this.index);
      this.disableButtonNext = false;
      if (this.index <= 0) {
          this.disableButtonPrevious = true;
      }
  }

  onNextClick() {
      this.index ++;
      this.updateQuestion(this.index);
      this.index$.next(this.index);
      this.disableButtonPrevious = false;
      if (this.index >= (this.questionsLength - 1)) {
          this.disableButtonNext = true;
      }

  }

  OnSelect(answer: string) {
      alert("asdqwdq");
  }

}
