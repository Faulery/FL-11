import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})

export class CreateNewsComponent implements OnInit {

title = '';
description = '';
content = '';
date: any;
author = '';
url = '';
urlToImage = '';

public dataArr: Observable<any[]>;

  constructor(public db: AngularFireDatabase, private router: Router) {
    this.dataArr = db.list('dataArr').valueChanges();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.db.list('dataArr').push({
      title: this.title,
      description: this.description,
      content: this.content,
      date: this.date,
      author: this.author,
      url: this.url,
      urlToImage: this.urlToImage
    });
    this.router.navigate(['/']);
  }

}
