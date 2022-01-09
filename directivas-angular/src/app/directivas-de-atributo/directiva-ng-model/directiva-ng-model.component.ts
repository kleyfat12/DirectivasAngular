import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-model',
  templateUrl: './directiva-ng-model.component.html'
})
export class DirectivaNgModelComponent implements OnInit {

  public nombre: string = "Fernando";

  constructor() { }

  ngOnInit(): void {
  }

}
