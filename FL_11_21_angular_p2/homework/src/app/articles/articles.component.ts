import { Component, OnInit } from '@angular/core';
import { CreateNewsComponent } from '../create-news/create-news.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  searchStr = '';

  constructor(private news: CreateNewsComponent) {

  }

  ngOnInit() {

  }

  showMore(event: any) {
    const target = event.target;
    let content = target.parentNode.children[2];
    content.className = 'shown';
  }

}
