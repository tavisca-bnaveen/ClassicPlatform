import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsAndSuppsComponent } from './trips-and-supps/trips-and-supps.component';
import { ClientHiearchyComponent } from './client-hiearchy/client-hiearchy.component';
import { BankClientComponent } from './bank-client/bank-client.component';
import { CnxComponent } from './cnx/cnx.component';
import { PortalComponent } from './portal/portal.component';
import { MauiComponent } from './maui/maui.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsAndSuppsComponent,
    ClientHiearchyComponent,
    BankClientComponent,
    CnxComponent,
    PortalComponent,
    MauiComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
