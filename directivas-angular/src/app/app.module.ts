import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaNgClassComponent } from './directivas-de-atributo/directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './directivas-de-atributo/directiva-ng-style/directiva-ng-style.component';
import { DirectivaNgModelComponent } from './directivas-de-atributo/directiva-ng-model/directiva-ng-model.component';
import { FormsModule } from '@angular/forms';
import { DirectivaNgSwitchComponent } from './directivas-de-estructura/directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgForComponent } from './directivas-de-estructura/directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgIfComponent } from './directivas-de-estructura/directiva-ng-if/directiva-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent,
    DirectivaNgModelComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgForComponent,
    DirectivaNgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
