import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html'
})
export class DirectivaNgSwitchComponent implements OnInit {

  public numero: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
