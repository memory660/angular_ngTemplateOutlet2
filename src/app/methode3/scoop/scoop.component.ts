import { Component, OnInit } from '@angular/core';
import { MediaType } from 'src/app/methode1/article';

@Component({
  selector: 'app-scoop',
  templateUrl: './scoop.component.html',
  styleUrls: ['./scoop.component.scss']
})
export class ScoopComponent implements OnInit {
  mediaType: typeof MediaType = MediaType;

  contents: { title: string; description: string; img: string }[] = [
    {
      title: '[Scoop] Angular is Awesome',
      description: 'Angular is one of the most famous frontend framework',
      img: 'https://picsum.photos/50/50',
    },
    {
      title: '[Scoop] Angular is better than React? ...',
      description: 'It all comes down to the business needs',
      img: 'https://picsum.photos/50/50',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
