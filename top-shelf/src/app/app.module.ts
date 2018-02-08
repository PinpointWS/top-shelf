import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CoreModule } from "./core/core.module";
import { Home2Component } from './home2/home2.component';
import { TheBandComponent } from './the-band/the-band.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { PhotosComponent } from './photos/photos.component';
import { MusicComponent } from './music/music.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    Home2Component,
    TheBandComponent,
    EventsComponent,
    ContactComponent,
    PhotosComponent,
    MusicComponent,
    FaqsComponent,
    GalleryComponent,     
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    CoreModule,
    NgxGalleryModule,
    NgbModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
