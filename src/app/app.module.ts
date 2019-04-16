import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AtthemoneyComponent } from './atthemoney/atthemoney.component';
import { DefaultComponent } from './default/default.component';
import { FiidiiComponent } from './fiidii/fiidii.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AtthemoneyComponent, DefaultComponent, FiidiiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
