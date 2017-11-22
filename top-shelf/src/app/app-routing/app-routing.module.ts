import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { Home2Component } from "../home2/home2.component";
import { EventsComponent } from "../events/events.component";
import { ContactComponent } from "../contact/contact.component";
import { TheBandComponent } from "../the-band/the-band.component";
import { PhotosComponent } from "../photos/photos.component";

const appRoutes: Routes = [
           { path: 'home',   component: Home2Component  },
           { path: 'theband',   component: TheBandComponent  },
           { path: 'events',   component: EventsComponent  },
           { path: 'contacts',   component: ContactComponent  },
           { path: 'photos',   component: PhotosComponent  },
           { path: '',   component: Home2Component  },
           { path: '**', component: Home2Component }

         ];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule {}