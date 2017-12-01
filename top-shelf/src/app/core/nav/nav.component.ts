import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 private collapse: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
      if(this.collapse) {
        return "#191516";
      } else {
        return "#191516";
      }
    }
}
