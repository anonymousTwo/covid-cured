import { Component, OnInit } from '@angular/core';

export interface Section {
  item: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  introductionContent: Section[] = [
    {
      item: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
      standard dummy text ever since the 1500s.`,
    },
    {
      item: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
      standard dummy text ever since the 1500s.`,
    },
    {
      item: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
      standard dummy text ever since the 1500s.`,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
