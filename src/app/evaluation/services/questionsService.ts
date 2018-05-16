import { Injectable, OnInit } from '@angular/core';
import { QuestionModel } from './../model/question.model';
import { QUESTIONS } from './../data/questions';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class QuestionsService {

    private questions$: BehaviorSubject<QuestionModel[]>;
    private questions: QuestionModel[];

    constructor () {
        this.questions = [];
        this.questions$ = new BehaviorSubject(this.questions);
        this.fetch();
    }

    public getQuestions(): Observable<QuestionModel[]> {
        return this.questions$.asObservable();
    }

    public getQuestionszzz(): Observable<QuestionModel[]> {
        return this.questions$[1].asObservable();
    }

    private fetch() {
        // fake http request
        Observable.create((observer: Observer<QuestionModel[]>) => {
            observer.next(QUESTIONS);
            observer.complete();
        }).subscribe(questions => {
            this.questions = questions;
            this.questions$.next(this.questions);
        });
    }

}