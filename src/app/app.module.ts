import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AtthemoneyComponent } from './atthemoney/atthemoney.component';
import { DefaultComponent } from './default/default.component';
import { FiidiiComponent } from './fiidii/fiidii.component';
import { ImpliedvolatalityComponent } from './impliedvolatality/impliedvolatality.component';
import { OpeninterestComponent } from './openinterest/openinterest.component';
import { PremiumdecayComponent } from './premiumdecay/premiumdecay.component';
import { PutcallratioComponent } from './putcallratio/putcallratio.component';
import { SupportresistanceComponent } from './supportresistance/supportresistance.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AtthemoneyComponent, DefaultComponent, FiidiiComponent, ImpliedvolatalityComponent, OpeninterestComponent, PremiumdecayComponent, PutcallratioComponent, SupportresistanceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
