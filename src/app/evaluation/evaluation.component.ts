import { Component, OnInit } from '@angular/core';
import {GetQuestionService} from './service/getQuestion.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {current} from 'codelyzer/util/syntaxKind';

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
  answer: string;
  index = 0;
  public index$: BehaviorSubject<number>;
  disableButtonPrevious = true;
  disableButtonNext = false;
  questionsLength: number;
  currentQuestion$: BehaviorSubject<number>;
  currentQuestion = 1;
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected4 = false;
  correctAnswer = 0;
  correctAnswer$: BehaviorSubject<number>;
  selectedAnswer: string;


  public questions = [];
  public questions2 = [
      {id: 1, question: 'aaa', option1: 'q1o1', option2: 'q1o2', option3: 'q1o3', option4: 'q1o4', answer: 'a'},
      {id: 2, question: 'bbb', option1: 'q2o1', option2: 'q2o2', option3: 'q2o3', option4: 'q2o4', answer: 'a'},
      {id: 3, question: 'ccc', option1: 'q3o1', option2: 'q3o2', option3: 'q3o3', option4: 'q3o4', answer: 'a'},
      {id: 4, question: 'ddd', option1: 'q4o1', option2: 'q4o2', option3: 'q4o3', option4: 'q4o4', answer: 'a'},
      {id: 5, question: 'eee', option1: 'q5o1', option2: 'q5o2', option3: 'q5o3', option4: 'q5o4', answer: 'a'},
      {id: 6, question: 'fff', option1: 'q6o1', option2: 'q6o2', option3: 'q6o3', option4: 'q6o4', answer: 'a'},
      {id: 7, question: 'ggg', option1: 'q7o1', option2: 'q7o2', option3: 'q7o3', option4: 'q7o4', answer: 'a'}];

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
      this.answer = this.questions2[this.index].answer;

      this.index$ = new BehaviorSubject(this.index);
      this.index$.subscribe(currentValue => { this.index = currentValue; });
      this.questionsLength = this.questions2.length;

      this.currentQuestion$ = new BehaviorSubject(this.currentQuestion);
      this.currentQuestion$.subscribe(currentValue => this.currentQuestion = currentValue);

      this.correctAnswer$ = new BehaviorSubject(this.correctAnswer);
      this.correctAnswer$.subscribe(currentValue => this.correctAnswer = currentValue);

  }

  updateQuestion(val: number) {
      this.question = this.questions2[val].question,
      this.op1 = this.questions2[val].option1;
      this.op2 = this.questions2[val].option2;
      this.op3 = this.questions2[val].option3;
      this.op4 = this.questions2[val].option4;
      this.answer = this.questions2[val].answer;
  }

  onPreviousClick() {
      this.index --;
      this.updateQuestion(this.index);
      this.index$.next(this.index);
      this.disableButtonNext = false;
      if (this.index <= 0) {
          this.disableButtonPrevious = true;
      }

      // update current question
      this.currentQuestion--;
      this.currentQuestion$.next(this.currentQuestion);
  }

  onNextClick() {
      this.index ++;
      this.updateQuestion(this.index);
      this.index$.next(this.index);
      this.disableButtonPrevious = false;
      if (this.index >= (this.questionsLength - 1)) {
          this.disableButtonNext = true;
      }

      // update current question
      this.currentQuestion++;
      this.currentQuestion$.next(this.currentQuestion);

      // reset style on each click
      this.checkAnswer(false, false, false, false);

      this.countAnswer();

  }

  OnSelect(answer: string) {

      switch (answer) {
          case 'a':
              console.log('chelsea');
              this.checkAnswer(true, false, false, false);
              break;
          case 'b':
              console.log('man u');
              this.checkAnswer(false, true, false, false);
              break;
          case 'c':
              console.log('fbt');
              this.checkAnswer(false, false, true, false);
              break;
          case 'd':
              console.log('i am hungry');
              this.checkAnswer(false, false, false, true);
              break;
          default:
              console.log('alala');
      }

      this.selectedAnswer = answer;

  }

  checkAnswer(a, b, c, d) {
      this.isSelected1 = a;
      this.isSelected2 = b;
      this.isSelected3 = c;
      this.isSelected4 = d;
  }

  countAnswer() {
    console.log('current correct Answer ' + this.answer);
    console.log('selected answer', this.selectedAnswer);

    if ((this.answer === this.selectedAnswer) && (this.selectedAnswer != null))  {
        this.correctAnswer ++;
        this.correctAnswer$.next(this.correctAnswer);
    }

  }

}


