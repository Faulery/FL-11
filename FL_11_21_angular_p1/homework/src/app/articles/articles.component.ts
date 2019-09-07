import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  ArticlesArr = [
    {
      heading: 'News line', shortDesc: 'Some text with short description',
      content: 'A lot of text with some content', author: 'Author',
      sourceURL: 'URL', date: '15.04.1994'
    }
  ]

  constructor() { }

  ngOnInit() {

  }

}
