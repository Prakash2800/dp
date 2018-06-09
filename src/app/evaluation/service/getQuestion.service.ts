import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from '../interface/questionInterface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetQuestionService {
    private url = '../assets/data/questions.json';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.url);
    }
}
