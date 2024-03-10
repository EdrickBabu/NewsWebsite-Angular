import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NewsApiService } from './Services/news-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TechnewsComponent } from './technews/technews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
