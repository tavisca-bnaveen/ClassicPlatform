import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHiearchyComponent } from './client-hiearchy/client-hiearchy.component';
import { BankClientComponent } from './bank-client/bank-client.component';
import { CnxComponent } from './cnx/cnx.component';
import { PortalComponent } from './portal/portal.component';
import { MauiComponent } from './maui/maui.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHiearchyComponent,
    BankClientComponent,
    CnxComponent,
    PortalComponent,
    MauiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
