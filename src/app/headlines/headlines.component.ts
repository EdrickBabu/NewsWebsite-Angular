import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Services/news-api.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.css'
})
export class HeadlinesComponent implements OnInit{

  constructor(private service:NewsApiService) { }

  topHeadlinesResult:any=[];
  ngOnInit(): void {
    
    this.service.topHeadlines().subscribe((result)=>{

      console.log(result);
      this.topHeadlinesResult = result.articles;
    })
  }

}
