import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {

  }

  public dataArr = [];

  getData() {
    const url = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=2847ff53aeb442f09914a2a8c1aa69d6';
    this.http.get(url).subscribe(response => {
      return this.transformResponse(response);
    })
  }

  transformResponse(res) {
    const result = [];
    if (res.hasOwnProperty('articles')) {
      result.push(res.articles);
    }
    this.dataArr = result[0];
  }

}
