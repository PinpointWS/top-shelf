import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";

const appRoutes: Routes = [
           { path: '',   component: HomeComponent  },
           { path: '**', component: HomeComponent }

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