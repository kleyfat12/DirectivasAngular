import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html'
})
export class DirectivaNgClassComponent implements OnInit {

  public clase: string = "bg-danger";

  constructor() { }

  ngOnInit(): void {
  }

  public generarClase(): string{
    return "bg-danger";
  }
}
