import { Component, OnInit } from '@angular/core';
import { MediaType } from '../methode1/article';

@Component({
  selector: 'app-methode3',
  templateUrl: './methode3.component.html',
  styleUrls: ['./methode3.component.scss']
})
export class Methode3Component implements OnInit {
  mediaType: typeof MediaType = MediaType;
  selectedType?: MediaType;

  onMediaChanged(type: MediaType) {
    this.selectedType = type;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
