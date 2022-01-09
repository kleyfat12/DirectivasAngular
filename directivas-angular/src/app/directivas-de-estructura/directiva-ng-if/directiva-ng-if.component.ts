import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html'
})
export class DirectivaNgIfComponent implements OnInit {

  public expresion: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
