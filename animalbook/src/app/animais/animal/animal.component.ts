import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  url: string = '';

  @Input() descricao: string = '';
  @Input('url') set urlOriginal(url: string) {
    if (url.startsWith('data')) {
      this.url = url;
      return;
    }

    this.url = `${environment.apiBaseUrl}/imgs/${url}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
