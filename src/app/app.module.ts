import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Methode1Component } from './methode1/methode1.component';
import { Methode2Component } from './methode2/methode2.component';
import { Methode3Component } from './methode3/methode3.component';
import { LinkedinComponent } from './methode3/linkedin/linkedin.component';
import { MediumComponent } from './methode3/medium/medium.component';
import { ScoopComponent } from './methode3/scoop/scoop.component';
import { ArticleComponent } from './methode3/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    Methode1Component,
    Methode2Component,
    Methode3Component,
    LinkedinComponent,
    MediumComponent,
    ScoopComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
