import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})

export class CreateNewsComponent implements OnInit {

  [x: string]: any;

  constructor() {

  }

   log(){
    console.log(
    `Title: ${this.title}
    Description: ${this.description}
    Content: ${this.content}
    Date: ${this.date}
    Author: ${this.author}
    URL: ${this.url}`
    );
  }

  ngOnInit() {

  }

}
