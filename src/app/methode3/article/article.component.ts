import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() contents?: { title: string; description: string; img: string }[];
  @Input('template') templateRef!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
