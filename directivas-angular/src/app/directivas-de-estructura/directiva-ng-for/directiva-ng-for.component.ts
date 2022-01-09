import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html'
})
export class DirectivaNgForComponent implements OnInit {

  public personas: Array<Persona> = [
    new Persona("Fernando", "Carrillo Lopez", 18),
    new Persona("Juan", "Gonzalez", 23),
    new Persona("Luis", "Hernandez", 45)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class Persona{
  constructor(public nombre: string, public apellido: string, public edad: number){}
}