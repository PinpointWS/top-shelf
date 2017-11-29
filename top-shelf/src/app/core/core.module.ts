import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [        
    NavComponent,
    FooterComponent, 
  ],
  declarations: [
    NavComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
