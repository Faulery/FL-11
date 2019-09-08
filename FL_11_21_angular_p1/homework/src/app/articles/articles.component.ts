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

}
