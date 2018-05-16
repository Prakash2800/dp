import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { RulesComponent } from './rules/rules.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EvaluationModule } from './evaluation/evaluation.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    MenuComponent,
    RulesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    EvaluationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
