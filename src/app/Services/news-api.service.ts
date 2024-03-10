import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { 

  }

  topHeadlinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a84a738a34be4d048ab8c0c612115fc9'

  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a84a738a34be4d048ab8c0c612115fc9'

  topHeadlines():Observable<any>
  {
    return this.http.get(this.topHeadlinesApiUrl);
  }

  techNews():Observable<any>
  {
    return this.http.get(this.techNewsApiUrl);
  }
}
