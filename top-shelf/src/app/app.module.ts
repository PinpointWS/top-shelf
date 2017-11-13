import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CoreModule } from "./core/core.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,     
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
