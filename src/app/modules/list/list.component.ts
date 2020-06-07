import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   storyDetails: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.fetchStory();
  }

  fetchStory() {
    this.http.get('../../../assets/list.json').subscribe(data => {
      this.storyDetails = data;
      console.log(data);
    })
  }

  viewStoryRoute() {
    this.router.navigate(['/view-Story']);
  }

}
