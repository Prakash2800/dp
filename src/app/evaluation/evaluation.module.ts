import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation.component';
import {GetQuestionService} from './service/getQuestion.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
      HttpClientModule
  ],
  declarations: [EvaluationComponent],
  providers: [GetQuestionService]
})
export class EvaluationModule { }
