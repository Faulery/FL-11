import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  searchStr = '';

  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.service.getData();
  }

  showMore(event: any) {
    const target = event.target;
    let content = target.parentNode.children[2];
    content.className = 'shown';
  }

}
