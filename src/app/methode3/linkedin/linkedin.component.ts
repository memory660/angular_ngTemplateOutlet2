import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {
  contents: { title: string; description: string; img: string }[] = [
    {
      title: '[LinkedIn] Angular is Awesome',
      description: 'Angular is one of the most famous frontend framework',
      img: 'https://picsum.photos/50/50',
    },
    {
      title: '[LinkedIn] Angular is better than React? ...',
      description: 'It all comes down to the business needs',
      img: 'https://picsum.photos/50/50',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
