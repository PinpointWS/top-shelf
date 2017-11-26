import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

    public isCollapsed1 = true;
    public isCollapsed2 = true;
    public isCollapsed3 = true;
    public isCollapsed4 = true;
    public isCollapsed5 = true;
    public isCollapsed6 = true;
    public isCollapsed7 = true;
  constructor() { }

  ngOnInit() {
  }

}
