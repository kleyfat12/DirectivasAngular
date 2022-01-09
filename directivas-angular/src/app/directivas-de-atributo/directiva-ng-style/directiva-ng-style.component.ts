import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html'
})
export class DirectivaNgStyleComponent implements OnInit {

  public checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
