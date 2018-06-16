import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation.component';
import {GetQuestionService} from './service/getQuestion.service';
import {HttpClientModule} from '@angular/common/http';
import { PositionElementDirective } from './directive/position-element.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [EvaluationComponent, PositionElementDirective],
  providers: [GetQuestionService]
})
export class EvaluationModule { }
