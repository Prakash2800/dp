import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RulesComponent } from './rules/rules.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {EvaluationComponent} from './evaluation/evaluation.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: EvaluationComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'evaluation',
        component: EvaluationComponent
    },
    {
        path: 'rules',
        component: RulesComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
