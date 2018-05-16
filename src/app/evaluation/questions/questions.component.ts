import { Component, OnInit } from '@angular/core';
import {QuestionModel} from '../model/question.model';
import {QuestionsService} from '../services/questionsService';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: QuestionModel[];
  constructor(public questionsService: QuestionsService) { }

  ngOnInit() {
  }

}
