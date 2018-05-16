import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation.component';
import {QuestionsService} from './services/questionsService';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EvaluationComponent, QuestionComponent, QuestionsComponent],
  providers: [QuestionsService]
})
export class EvaluationModule { }
