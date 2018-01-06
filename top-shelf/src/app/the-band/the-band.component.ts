import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-band',
  templateUrl: './the-band.component.html',
  styleUrls: ['./the-band.component.scss']
})
export class TheBandComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  
  constructor() { }

  ngOnInit() {
  }

}
