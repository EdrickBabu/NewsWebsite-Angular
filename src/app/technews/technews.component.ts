import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Services/news-api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrl: './technews.component.css'
})
export class TechnewsComponent implements OnInit{

  constructor(private service:NewsApiService) { }

  techNewsResult:any=[];
  ngOnInit(): void {
    
    this.service.techNews().subscribe((result)=>{

      console.log(result);
      this.techNewsResult = result.articles;
    })
  }

}
