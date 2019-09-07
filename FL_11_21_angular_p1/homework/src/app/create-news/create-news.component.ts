import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})

export class CreateNewsComponent implements OnInit {

  constructor() {

   }

   saveData(event) {
    console.log('Dont worry, we got you data and saved it :)');
   }

  ngOnInit() {

  }

}
